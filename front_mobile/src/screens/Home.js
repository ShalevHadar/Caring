import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import {
  Text,
  View,
  Pressable,
  TextInput,
  Animated,
  Easing,
} from "react-native";
import handleApi from "../api/handleApi";
import styles from "../style/HomeStyle";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [showText, setShowText] = useState(false);
  const [handleEmailsSTR, setHandleEmailsSTR] = useState("");
  const [loop, setLoop] = useState(true);

  // validating the email with front Regex
  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  // handle post function
  const handlePost = async () => {
    await handleApi
      .post("/createPinByEmail", { email })
      .then(function () {
        setShowText(false);
        navigation.navigate("Auth", { email: email });
      })
      .catch(function (error) {
        if (error.response.status > 400) {
          setShowText(true);
          setHandleEmailsSTR(`your email isn't a part of the school db`);
        }
      });
  };

  // if email isn't valid (Regex);
  const handleNotValidEmail = () => {
    setHandleEmailsSTR(`your email isn't valid`);
    setShowText(true);
  };

  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/lottie/34452-hi-button-animation.json")}
          autoPlay
          loop={loop}
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
          value={email}
          onChangeText={(e) => {
            setEmail(e);
            validate(e);
          }}
        />
        <Text style={styles.roseColor}>{showText ? handleEmailsSTR : ""}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            validate(email);
            flag ? handlePost() : handleNotValidEmail();
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>
        {/*  just to test the app */}
        {/* <Pressable
          style={{ paddingTop: 40 }}
          onPress={() =>
            navigation.navigate("Incident", {
              email: "shalev",
              fName: "shalev",
            })
          }
        >
          <Text style={{ fontSize: 30 }}>yo</Text>
        </Pressable> */}

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

export default HomeScreen;
