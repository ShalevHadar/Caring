import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Pressable } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LottieView from "lottie-react-native";
import styles from "../style/IncidentStyle";

const Incident = ({ route }) => {
  const { fName, email, classId } = route.params;
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loop, setLoop] = useState(true);
  const [content, setContent] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  const setName = () => {
    setIsAnonymous(!isAnonymous);
  };

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSubmit = () => {};

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
        loop={loop}
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
          {isAnonymous
            ? Capitalize(fName) + ", " + classId + "th Grade"
            : "Anonymous"}
        </Text>
      </View>
      <TextInput
        multiline={true}
        style={styles.input}
        autoCorrect={false}
        placeholder="Tell us what happened.."
        value={content}
        onChangeText={(e) => {
          setContent(e);
        }}
      />
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

export default Incident;
