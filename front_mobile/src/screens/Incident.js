import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Pressable, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
import BouncyCheckbox from "react-native-bouncy-checkbox";
import LottieView from "lottie-react-native";
import styles from "../style/IncidentStyle";
import handleApi from "../api/handleApi";

const Incident = ({ route }) => {
  const { student } = route.params;
  const { student_id, firstname, class_id } = student;
  const [isAnonymous, setIsAnonymous] = useState(false);
  const [loop, setLoop] = useState(true);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);

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

  const handleClassId = (str) => {
    const grade = str.toString();
    if (grade.length == 2) return grade.charAt(0);
    else return grade.substring(0, 2);
  };

  const handleButtonAlert = () =>
    Alert.alert(
      "Message verification",
      "Are you sure you want to send the incident?",
      [
        {
          text: "No",
          onPress: () => false,
          style: "cancel",
        },
        { text: "Yes", onPress: () => sendIncident() },
      ]
    );

  const handleSubmit = async () => {
    await handleButtonAlert();
  };

  const sendIncident = async () => {
    setLoading(true);
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    await handleApi
      .post("/incident", { content, student_id, class_id, date, isAnonymous })
      .then((res) => console.log(res.status))
      .catch((err) => console.log(err));
    setLoading(false);
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
            ? Capitalize(firstname) +
              ", " +
              handleClassId(class_id) +
              "th Grade"
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
      {loading ? (
        <LottieView
          style={styles.lottie2}
          source={require("../../assets/lottie/78259-loading.json")}
          autoPlay
          loop
        />
      ) : null}
      <Pressable style={styles.button} onPress={handleSubmit}>
        <Text style={styles.buttonText}>Send</Text>
      </Pressable>
    </KeyboardAwareScrollView>
  );
};

export default Incident;
