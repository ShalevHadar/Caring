import React, { useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
//import styles from "./styles";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LottieView from "lottie-react-native";
import styles from "../style/IncidentStyle";

const Incident = ({ route }) => {
  const { fName } = route.params;
  const [isAnonymous, setIsAnonymous] = useState(false);

  const setName = () => {
    setIsAnonymous(!isAnonymous);
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  return (
    <KeyboardAwareScrollView
      resetScrollToCoords={{ x: 0, y: 0 }}
      contentContainerStyle={styles.container}
      scrollEnabled={false}
    >
      <LottieView
        style={styles.lottie}
        source={require("../../assets/lottie/89023-loading-circles.json")}
        autoPlay
      />
      <BouncyCheckbox
        style={{ marginBottom: 15 }}
        size={26}
        isChecked={isAnonymous}
        onPress={() => setName()}
        fillColor="#DFD3C3"
        unfillColor="#FFFFFF"
        text="Do you want to identify yourself?"
        textStyle={{ fontSize: 22, textDecorationLine: "none" }}
      />
      <View style={styles.identifyContainer}>
        <Text style={styles.identifyText}>
          {isAnonymous ? Capitalize(fName) : "Anonymous"}
        </Text>
      </View>
      <TextInput
        multiline={true}
        style={styles.input}
        placeholder="Tell us what happened.."
      />
      <Pressable style={styles.button}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

export default Incident;
