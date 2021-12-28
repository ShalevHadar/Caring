import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  identifyContainer: {
    borderColor: "white",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    width: 340,
    maxWidth: 340,
    marginBottom: 20,
    backgroundColor: "#48acdf",
  },
  identifyText: {
    fontSize: 25,
    textAlign: "center",
  },
  input: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: "#48acdf",
    borderWidth: 1,
    height: 320,
    width: 340,
    maxWidth: 340,
    padding: 20,
    lineHeight: 32,
    fontSize: 22,
  },
  lottie: {
    position: "absolute",
    bottom: 220,
    height: 100,
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
});

export default styles;
