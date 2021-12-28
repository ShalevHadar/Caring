import React from "react";
import { Text, View, Image, Pressable } from "react-native";
import LottieView from "lottie-react-native";
import { Ionicons } from "@expo/vector-icons";
import styles from "../style/TrustStyle";

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

export default Trust;
