import React, { useState } from "react";
import { View, TextInput, Image, Text, StyleSheet } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LottieView from "lottie-react-native";

const Incident = () => {
  const [isAnonymous, setIsAnonymous] = useState(false);

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <LottieView
        style={styles.lottie}
        source={require("../../assets/lottie/74391-hearts-loading-tiktok-style.json")}
        autoPlay
      />
      <BouncyCheckbox
        style={{ marginBottom: 20 }}
        size={22}
        isChecked={isAnonymous}
        onPress={() => setIsAnonymous(!isAnonymous)}
        fillColor="#48acdf"
        unfillColor="#FFFFFF"
        text="Do you want to identify yourself?"
        //iconStyle={{ borderColor: "#1c789c" }}
        textStyle={{ fontSize: 22 }}
      />
      <View style={styles.identifyContainer}>
        <Text style={styles.identifyText}>
          {isAnonymous ? "Shalev Hadar, 12th Grade" : "Anonymous"}
        </Text>
      </View>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder="Tell us what happened.."
      />
      {/* <Pressable
        style={styles.button}
        onPress={() => navigation.navigate("Auth")}
      >
        <Text style={styles.buttonText}>Submit</Text>
      </Pressable> */}
    </KeyboardAwareScrollView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  identifyContainer: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    width: 340,
    maxWidth: 340,
    marginBottom: 20,
    backgroundColor: "#48acdf",
  },
  identifyText: {
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: "#48acdf",
    borderWidth: 1,
    height: 320,
    width: 340,
    maxWidth: 340,
    padding: 20,
    lineHeight: 32,
    fontSize: 22,
  },
  lottie: {
    position: "absolute",
    bottom: 220,
    height: 100,
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
});

export default Incident;
