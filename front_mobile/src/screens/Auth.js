import React from "react";
import { View } from "react-native";
import AnimatedExample from "../component/authForm";
import styles from "../style/AuthStyle";

function Auth({ navigation, route }) {
  return (
    <View style={styles.container}>
      <AnimatedExample
        email={route.params.email}
        style={styles.main}
        navigation={navigation}
      />
    </View>
  );
}

export default Auth;
