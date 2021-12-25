import LottieView from "lottie-react-native";
import React, { useState } from "react";
import {
  Text,
  StyleSheet,
  View,
  Pressable,
  TextInput,
  SafeAreaView,
} from "react-native";

function HomeScreen({ navigation }) {
  const { text, setText } = useState("");
  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/lottie/34452-hi-button-animation.json")}
          autoPlay
        />
        <Text style={styles.title}>Welcome to Caring</Text>
        <Text style={styles.smallContainer}>
          Please Enter your Email Address
        </Text>
        <TextInput
          style={styles.inputStyle}
          placeholder="Enter your email address here"
          value={text}
          //onChangeText={setText}
        />
        <Pressable
          style={styles.button}
          onPress={() => navigation.navigate("Auth")}
        >
          <Text style={styles.text}>Submit</Text>
        </Pressable>

        <Pressable
          style={styles.trust}
          onPress={() => navigation.navigate("Trust")}
        >
          <Text style={styles.text2}>
            Why should i trust you? Click to learn
          </Text>
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
  },
  inputStyle: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
  },

  button: {
    marginTop: 40,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#406882",
    borderColor: "#B1D0E0",
    borderWidth: 2,
  },
  text: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  trust: {
    marginTop: 40,
  },
  text2: {
    fontSize: 15,
  },
});

export default HomeScreen;
