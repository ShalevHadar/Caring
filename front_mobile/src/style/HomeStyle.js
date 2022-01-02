import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    backgroundColor: "white",
  },
  lottie: {
    position: "absolute",
    bottom: 250,
  },
  lottie2: {
    position: "absolute",
    zIndex: -56756765671,
    top: 100,
    width: 250,
  },
  title: {
    fontSize: 40,
    fontWeight: "bold",
    letterSpacing: 0.25,
  },
  smallContainer: {
    paddingTop: 60,
    fontSize: 20,
  },
  inputStyle: {
    borderRadius: 20,
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    width: 300,
    borderColor: "#7A6C5D",
    color: "#0645AD",
  },

  button: {
    marginTop: 30,
    paddingVertical: 15,
    paddingHorizontal: 30,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: "#7A6C5D",
    borderColor: "#7A6C5D",
    borderWidth: 2,
    borderRadius: 20,
  },
  buttonText: {
    fontSize: 20,
    fontWeight: "bold",
    letterSpacing: 0.25,
    color: "white",
  },
  trustText: {
    marginTop: 60,
    top: 100,
  },
  linkText: {
    fontSize: 20,
    color: "#0645AD",
    textDecorationLine: "underline",
  },
  caring: {
    color: "#48ACDF",
    textShadowColor: "#1c789c",
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  roseColor: {
    color: "#E63946",
  },
});

export default styles;
