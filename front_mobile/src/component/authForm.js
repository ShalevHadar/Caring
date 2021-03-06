import { Animated, Image, Pressable, SafeAreaView, Text } from "react-native";
import React, { useEffect, useState } from "react";
import LottieView from "lottie-react-native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";

import styles, {
  ACTIVE_CELL_BG_COLOR,
  CELL_BORDER_RADIUS,
  CELL_SIZE,
  DEFAULT_CELL_BG_COLOR,
  NOT_EMPTY_CELL_BG_COLOR,
} from "../style/authFormStyle";
import handleApi from "../api/handleApi";
import { getValueFor, save } from "../../auth/SecureStore";

const { Value, Text: AnimatedText } = Animated;

const CELL_COUNT = 4;

const animationsColor = [...new Array(CELL_COUNT)].map(() => new Value(0));
const animationsScale = [...new Array(CELL_COUNT)].map(() => new Value(1));
const animateCell = ({ hasValue, index, isFocused }) => {
  Animated.parallel([
    Animated.timing(animationsColor[index], {
      useNativeDriver: false,
      toValue: isFocused ? 1 : 0,
      duration: 250,
    }),
    Animated.spring(animationsScale[index], {
      useNativeDriver: false,
      toValue: hasValue ? 0 : 1,
      duration: hasValue ? 300 : 250,
    }),
  ]).start();
};

const AnimatedExample = ({ navigation, email }) => {
  const [value, setValue] = useState("");
  const [showText, setShowText] = useState(false);
  const [loading, setLoading] = useState(false);
  const [handleWrongPin, setHandleWrongPin] = useState("");
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  // handle the submit button
  const handleSubmit = async () => {
    if (value.length === 4) {
      setLoading(true);
      setShowText(false);
      try {
        const response = await handleApi.post("/auth", {
          email,
          pincode: value,
        });
        if (response.status === 200) {
          setLoading(false);
          save("myToken", response.data.token);
          const student = response.data.student;
          navigation.navigate("Incident", { student });
        }
      } catch (error) {
        setLoading(false);
        setShowText(true);
        setHandleWrongPin(`Wrong Pincode`);
      }
    }
    if (value.length < 4) {
      setShowText(true);
      setHandleWrongPin(`Pin is missing ${4 - value.length} Digits`);
    }
  };

  const renderCell = ({ index, symbol, isFocused }) => {
    const hasValue = Boolean(symbol);
    const animatedCellStyle = {
      backgroundColor: hasValue
        ? animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [NOT_EMPTY_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          })
        : animationsColor[index].interpolate({
            inputRange: [0, 1],
            outputRange: [DEFAULT_CELL_BG_COLOR, ACTIVE_CELL_BG_COLOR],
          }),
      borderRadius: animationsScale[index].interpolate({
        inputRange: [0, 1],
        outputRange: [CELL_SIZE, CELL_BORDER_RADIUS],
      }),
      transform: [
        {
          scale: animationsScale[index].interpolate({
            inputRange: [0, 1],
            outputRange: [0.2, 1],
          }),
        },
      ],
    };

    // Run animation on next event loop tik
    // Because we need first return new style prop and then animate this value
    setTimeout(() => {
      animateCell({ hasValue, index, isFocused });
    }, 0);

    return (
      <AnimatedText
        key={index}
        style={[styles.cell, animatedCellStyle]}
        onLayout={getCellOnLayoutHandler(index)}
      >
        {symbol || (isFocused ? <Cursor /> : null)}
      </AnimatedText>
    );
  };

  return (
    <SafeAreaView style={styles.root}>
      <Text style={styles.title}>Verification</Text>
      <Image
        style={styles.icon}
        source={require("../../assets/lockCaring.png")}
      />
      <Text style={styles.subTitle}>
        Please enter the verification code{"\n"}
        we sent to your email address
      </Text>

      <CodeField
        ref={ref}
        {...props}
        value={value}
        onChangeText={setValue}
        cellCount={CELL_COUNT}
        rootStyle={styles.codeFiledRoot}
        keyboardType="number-pad"
        textContentType="oneTimeCode"
        renderCell={renderCell}
      />
      <Text style={styles.warningText}>{showText ? handleWrongPin : ""}</Text>
      {loading ? (
        <LottieView
          style={styles.lottie2}
          source={require("../../assets/lottie/78259-loading.json")}
          autoPlay
          loop
        />
      ) : null}
      <Pressable style={styles.nextButton} onPress={() => handleSubmit()}>
        <Text style={styles.nextButtonText}>Verify</Text>
      </Pressable>
    </SafeAreaView>
  );
};

export default AnimatedExample;
