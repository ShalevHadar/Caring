import React, { useEffect } from "react";
import { View } from "react-native";
import handleApi from "../api/handleApi";
import AnimatedExample from "../component/authForm";
import styles from "../style/AuthStyle";

function Auth({ navigation, route }) {
  const { email } = route.params;
  useEffect(() => {
    handleApi
      .post("/sendEmail", { email })
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  }, []);
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
