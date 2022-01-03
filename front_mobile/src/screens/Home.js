import LottieView from "lottie-react-native";
import React, { useEffect, useRef, useState } from "react";
import { Text, View, Pressable, TextInput } from "react-native";
import handleApi from "../api/handleApi";
import styles from "../style/HomeStyle";

function HomeScreen({ navigation }) {
  const [email, setEmail] = useState("");
  const [flag, setFlag] = useState(false);
  const [showText, setShowText] = useState(false);
  const [handleEmailsSTR, setHandleEmailsSTR] = useState("");
  const [loop, setLoop] = useState(true);
  const [loading, setLoading] = useState(false);
  const animation = useRef(null);

  // validating the email with front Regex
  const validate = (text) => {
    let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/;
    if (reg.test(text) === false) {
      setFlag(false);
    } else {
      setFlag(true);
    }
  };

  // handle post function
  const handlePost = async () => {
    setShowText(false);
    setLoading(true);
    await handleApi
      .post("/auth/pincode", { email })
      .then(function (res) {
        setLoading(false);
        setShowText(false);
        navigation.navigate("Auth", { email });
      })
      .catch(function (error) {
        if (error.response.status > 400) {
          setLoading(false);
          setShowText(true);
          setHandleEmailsSTR(`Oh No! We can't recognize this email`);
        }
      });
  };

  // if email isn't valid (Regex);
  const handleNotValidEmail = () => {
    setHandleEmailsSTR(`Your email address isn't valid`);
    setShowText(true);
  };

  const pauseAnimation = () => {
    animation.current.pause();
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoop(false), pauseAnimation();
    }, 10000);

    return () => {
      clearTimeout(timer);
    };
  }, []);

  return (
    <>
      <View style={styles.container}>
        <LottieView
          style={styles.lottie}
          source={require("../../assets/lottie/34452-hi-button-animation.json")}
          autoPlay
          loop={loop}
          ref={animation}
        />
        <Text style={styles.title}>
          Welcome to <Text style={styles.caring}>Caring</Text>
        </Text>
        <Text style={styles.smallContainer}>
          Please enter your email address
        </Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          placeholder="Enter your email address here"
          value={email}
          onChangeText={(e) => {
            setEmail(e);
            validate(e);
          }}
        />
        {loading ? (
          <LottieView
            style={styles.lottie2}
            source={require("../../assets/lottie/78259-loading.json")}
            autoPlay
            loop
          />
        ) : null}

        <Text style={styles.roseColor}>{showText ? handleEmailsSTR : ""}</Text>

        <Pressable
          style={styles.button}
          onPress={() => {
            validate(email);
            flag ? handlePost() : handleNotValidEmail();
          }}
        >
          <Text style={styles.buttonText}>Submit</Text>
        </Pressable>

        <Pressable
          style={styles.trustText}
          onPress={() => navigation.navigate("Trust")}
        >
          <Text style={styles.linkText}>Why should I trust this app?</Text>
        </Pressable>
      </View>
    </>
  );
}

export default HomeScreen;
