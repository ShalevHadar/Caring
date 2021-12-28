import LottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { Text, StyleSheet, View, Pressable, TextInput } from "react-native";
import axios from "axios";
import handleApi from "../api/handleApi";

function HomeScreen({ navigation }) {
  const [text, setText] = useState("");
  const [flag, setFlag] = useState(false);
  const [showText, setShowText] = useState(false);
  const [handleEmailsSTR, setHandleEmailsSTR] = useState("");
  const [studentDetails, setStudentDetails] = useState();

  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  const handlePost = async () => {
    await handleApi
      .post("/send", { email: text })
      .then(function (response) {
        //console.log(response.data);
        setStudentDetails(response.data);
        setShowText(false);
        navigation.navigate("Auth", { studentDetails });
      })
      .catch(function (error) {
        if (error.response.status > 400) {
          setShowText(true);
          setHandleEmailsSTR(`your email isn't a part of the school db`);
        }
      });
  };

  const handleSubmit = () => {
    handlePost();
  };

  const handleNotValidEmail = () => {
    setHandleEmailsSTR(`your email isn't valid`);
    setShowText(true);
  };

  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/lottie/34452-hi-button-animation.json")}
          autoPlay
          loop
          progress={100}
        />
        <Text style={styles.title}>
          Welcome to <Text style={styles.caring}>Caring</Text>
        </Text>
        <Text style={styles.smallContainer}>
          Please enter your email address
        </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your email address here"
          value={text}
          onChangeText={(e) => {
            setText(e);
            validate(e);
          }}
        />
        <Text style={{ color: "#E63946" }}>
          {showText ? handleEmailsSTR : ""}
        </Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            validate(text);
            flag ? handleSubmit() : handleNotValidEmail();
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        <Pressable
          style={styles.trustText}
          onPress={() => navigation.navigate("Trust")}
        >
          <Text style={styles.linkText}>Why should I trust this app?</Text>
        </Pressable>
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  lottie: {
    position: "absolute",
    bottom: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  smallContainer: {
    paddingTop: 60,
    fontSize: 20,
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: "#7A6C5D",
  },

  button: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7A6C5D",
    borderColor: "#7A6C5D",
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  trustText: {
    marginTop: 60,
    top: 100,
  },
  linkText: {
    fontSize: 20,
    color: "#0645AD",
    textDecorationLine: "underline",
  },
  caring: {
    color: "#48ACDF",
    textShadowColor: "#1c789c",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
});

export default HomeScreen;
