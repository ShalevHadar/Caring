import React, { useState } from "react";
import { Text, StyleSheet, View } from "react-native";
import { circles } from "./Photos";

const Winner = ({ winner }) => {
  const colors = ["Red", "Green", "Blue", "Brown", "Black"];
  const [colorStates, setColorStates] = useState([
    circles.red.hexCode,
    circles.green.hexCode,
    circles.blue.hexCode,
    circles.brown.hexCode,
    circles.black.hexCode,
  ]);
  let winnerColor = colorStates[winner];

  return (
    <View style={{ backgroundColor: winnerColor }}>
      <Text style={{ fontSize: 60 }}>{colors[winner]} Wins !</Text>
    </View>
  );
};

export default Winner;
