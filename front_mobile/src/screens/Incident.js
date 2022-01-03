import React, { useEffect, useState } from "react";
import { View, TextInput, Text, Pressable, Alert } from "react-native";
import { KeyboardAwareScrollView } from "react-native-keyboard-aware-scroll-view";
// import BouncyCheckbox from "react-native-bouncy-checkbox";
import LottieView from "lottie-react-native";
import styles from "../style/IncidentStyle";
import handleApi from "../api/handleApi";
import ModalDropdown from "react-native-modal-dropdown";
import { getValueFor } from "../../auth/SecureStore";

const Incident = ({ navigation, route }) => {
  const { student } = route.params;
  const { student_id, firstname, class_id } = student;
  const [isAnonymous, setIsAnonymous] = useState("bool");
  const [loop, setLoop] = useState(true);
  const [content, setContent] = useState("");
  const [loading, setLoading] = useState(false);
  const [showFailText, setShowFailText] = useState(false);
  const [token, setToken] = useState("");

  useEffect(() => {
    let timer = setTimeout(() => setLoop(false), 10000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(async () => {
    const token = await getValueFor("myToken")
      .then((res) => setToken(res))
      .catch((err) => console.log(err));
  }, []);

  const Capitalize = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1);
  };

  const handleSendingAlert = () =>
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

  const handleSuccessAlert = () => {
    setShowFailText(false);
    Alert.alert("Incident Sent", "Taking you to your dashboard", [
      {
        text: "Lets Go",
        onPress: () => navigation.navigate("Dashboard", { student_id, token }),
      },
    ]);
  };

  const handleIdentifier = () =>
    Alert.alert("You have to pick you identity", "Click on 'Choose Here'");

  const handleSubmit = async () => {
    await handleSendingAlert();
  };

  const sendIncident = async () => {
    if (isAnonymous === "bool") {
      handleIdentifier();
      return;
    }
    setLoading(true);
    const date = new Date().toISOString().slice(0, 19).replace("T", " ");
    await handleApi
      .post("/incident", {
        content,
        student_id,
        class_id,
        date,
        isAnonymous,
        token,
      })
      .then((res) => console.log(res.status, handleSuccessAlert()))
      .catch((err) => console.log(err, setShowFailText(true)));
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

      <View style={styles.pickAnonymous}>
        <Text style={styles.textIdentify}>Identify as </Text>
        <ModalDropdown
          defaultValue="Choose Here"
          textStyle={{ fontSize: 22, fontWeight: "bold" }}
          options={["Anonymous", Capitalize(firstname)]}
          dropdownTextStyle={{
            fontSize: 22,
            fontWeight: "bold",
          }}
          dropdownStyle={{ width: 150, maxWidth: 170, maxHeight: 100 }}
          onSelect={(index, option) => {
            // console.log(option);
            index ? setIsAnonymous(false) : setIsAnonymous(true);
          }}
        />
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
      <Text style={styles.failtext}>
        {showFailText ? "There's a problem identifying you" : ""}
      </Text>

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
