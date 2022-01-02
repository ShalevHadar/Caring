import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  title: {
    fontSize: 38,
    fontWeight: "bold",
    letterSpacing: 0.25,
    marginBottom: 50,
    paddingHorizontal: 10,
    top: 30,
    textAlign: "center",
  },
  lottie: {
    //position: "absolute",
    bottom: 250,
  },
  paragraph: {
    paddingHorizontal: 20,
    top: 50,
    fontSize: 24,
  },
  homeButtonContainer: {
    top: 120,
  },
  homeImage: {
    width: 90,
    height: 90,
  },
});

export default styles;
