import React, { useState } from "react";
import { View, TextInput, Image, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import styles from "./styles";
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

export default Incident;
