import React from "react";
import { Text, StyleSheet, View } from "react-native";
import LottieView from "lottie-react-native";

function Trust({ navigation }) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Why do we need your email Address?</Text>
      <LottieView
        style={styles.lottie}
        source={require("../../assets/lottie/86511-data-stealing.json")}
        autoPlay
      />
      <Text>
        To avoid false reports and misleading information, the system will{" "}
      </Text>
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
    marginBottom: 140,
    padding: 10,
  },
  lottie: {
    position: "absolute",
    bottom: 250,
  },
});

export default Trust;
