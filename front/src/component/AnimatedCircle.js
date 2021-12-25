import AnimatedLottieView from "lottie-react-native";
import React, { useEffect, useState } from "react";
import { StyleSheet, View } from "react-native";
import { circles } from "./Photos";

const AnimatedCircle = ({ itemId }) => {
  const [item, setItem] = useState(-1);
  const [colorStates, setColorStates] = useState([
    circles.red.uri,
    circles.green.uri,
    circles.blue.uri,
    circles.brown.uri,
    circles.black.uri,
  ]);

  useEffect(() => {
    setItem(itemId);
  }, []);

  return (
    <View>
      {item === -1 ? null : (
        <AnimatedLottieView
          source={colorStates[item - 1]}
          style={styles.circleStyle}
          autoPlay
        />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  circleStyle: {
    width: 200,
    height: 200,
  },
});

export default AnimatedCircle;
