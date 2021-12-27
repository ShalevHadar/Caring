import React from "react";
import { Text, StyleSheet, View } from "react-native";
import AnimatedExample from "../component/authForm";

function Auth({ navigation, route }) {
  const { email } = route.params;
  console.log(email);
  return (
    <View style={styles.container}>
      <AnimatedExample navigation={navigation} />
      <Text style={{ fontSize: 50, position: "absolute", bottom: 240 }}>
        Hello
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
});

export default Auth;
