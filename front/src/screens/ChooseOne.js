import React, { useEffect, useState } from "react";
import { StyleSheet, View, FlatList, Text } from "react-native";
import AnimatedCircle from "../component/AnimatedCircle";
import Winner from "../component/Winner";

function ChooseOne() {
  const [touchArray, setTouchArray] = useState([]);
  const [isPress, setIsPress] = useState(false);
  const [timer, setTimer] = useState();
  const [winner, setWinner] = useState(-1);

  useEffect(() => {
    if (timer === 0) {
      setWinner(Math.floor(Math.random() * touchArray.length));
    }

    if (!timer || isPress === false) return;

    const intervalId = setInterval(() => {
      setTimer(timer - 1);
    }, 1000);

    return () => clearInterval(intervalId);
  }, [timer, isPress]);

  const startTimer = () => {
    setTimer(3);
  };

  const stopTimer = () => {
    setTimer(3);
    setWinner(-1);
  };

  return (
    <>
      <View
        onStartShouldSetResponder={(event) => {
          setTouchArray(event.nativeEvent.touches);
          startTimer();
          setIsPress(true);
        }}
        style={styles.homeStyle}
        onTouchEnd={(e) => {
          const { pageX, pageY } = touchArray;
          setTouchArray([]);
          setIsPress(false);
          stopTimer();
        }}
      >
        <FlatList
          scrollEnabled={false}
          keyExtractor={(item) => item.identifier}
          data={touchArray}
          renderItem={({ item }) => {
            const { pageX, pageY } = item;
            return (
              <View
                style={{
                  position: "absolute",
                  left: item.pageX - 100,
                  top: item.pageY - 100,
                }}
              >
                {isPress ? <AnimatedCircle itemId={item.identifier} /> : null}
              </View>
            );
          }}
        />

        {winner >= 0 ? (
          <View style={styles.middleStyle1}>
            <Winner winner={winner} />
          </View>
        ) : null}
        {isPress ? (
          <View style={styles.middleStyle2}>
            <Text style={styles.fontStyle}>{timer}</Text>
          </View>
        ) : null}
      </View>
    </>
  );
}

const styles = StyleSheet.create({
  homeStyle: {
    flex: 1,
    backgroundColor: "white",
  },
  middleStyle1: {
    position: "absolute",
    alignSelf: "center",
    top: 200,
  },
  middleStyle2: {
    position: "absolute",
    alignSelf: "center",
    top: 280,
  },

  fontStyle: {
    fontSize: 85,
    fontWeight: "bold",
  },
});

export default ChooseOne;
