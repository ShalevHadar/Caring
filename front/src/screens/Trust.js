import React from "react";
import { Text, StyleSheet, View, Image, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";

function Trust({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why do we need your email address?</Text>
      <LottieView
        style={styles.lottie}
        source={require("../../assets/lottie/86511-data-stealing.json")}
        autoPlay
      />
      <Text style={styles.paragraph}>
        To avoid false reports and misleading information, the system will
        confirm your email is located in the school database.{" "}
      </Text>
      <Image
        style={styles.lineStyle}
        source={require("../../assets/LineBlue.png")}
      />
      <Pressable
        style={styles.backIcon}
        onPress={() => navigation.navigate("Home")}
      >
        <Ionicons name="arrow-back" size={34} color="black" />
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 50,
    paddingHorizontal: 10,
    top: 30,
    textAlign: "center",
  },
  lottie: {
    position: "absolute",
    bottom: 250,
  },
  paragraph: {
    paddingHorizontal: 20,
    top: 50,
    fontSize: 24,
  },
  lineStyle: {
    position: "absolute",
    zIndex: -1,
    top: 540,
    left: -140,
    maxHeight: 100,
    maxHeight: 300,
  },
  backIcon: {
    top: 200,
    right: 140,
  },
});

export default Trust;
