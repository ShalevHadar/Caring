import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AnimatedExample from "../component/authForm";

function Auth({ navigation, route }) {
  console.log(route.params.studentDetails);
  //console.log(email);
  return (
    <View style={styles.container}>
      <AnimatedExample style={styles.main} navigation={navigation} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
    paddingTop: 250,
  },
});

export default Auth;
