import React from "react";
import { Text, StyleSheet, View } from "react-native";

function Auth({ navigation }) {
  return (
    <View style={styles.container}>
      <Text>Auth Screen</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default Auth;
