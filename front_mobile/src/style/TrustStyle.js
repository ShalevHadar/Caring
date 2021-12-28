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
    position: "absolute",
    bottom: 250,
  },
  paragraph: {
    paddingHorizontal: 20,
    top: 50,
    fontSize: 24,
  },
  lineStyle: {
    position: "absolute",
    zIndex: -1,
    top: 540,
    left: -140,
    maxHeight: 100,
    maxHeight: 300,
  },
  backIcon: {
    top: 200,
    right: 140,
  },
});

export default styles;
