import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AnimatedExample from "../component/authForm";

function Auth({ navigation }) {
  return (
    <View style={styles.container}>
      <AnimatedExample navigation={navigation} />
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
});

export default Auth;
