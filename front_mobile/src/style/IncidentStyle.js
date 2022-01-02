import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  identifyContainer: {
    borderColor: "#DFD3C3",
    borderRadius: 20,
    borderWidth: 2,
    padding: 10,
    width: 340,
    maxWidth: 340,
    marginBottom: 20,
  },
  identifyText: {
    fontSize: 25,
    textAlign: "center",
    color: "#0645AD",
    fontWeight: "bold",
  },
  input: {
    backgroundColor: "#fff",
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 20,
    borderColor: "#DFD3C3",
    borderWidth: 2,
    height: 220,
    width: 340,
    maxWidth: 340,
    padding: 20,
    lineHeight: 32,
    fontSize: 22,
  },
  lottie: {
    position: "relative",
    height: 100,
    bottom: 10,
  },

  lottie2: {
    position: "absolute",
    zIndex: -1,
    width: 300,
    top: 140,
    alignSelf: "center",
  },
  button: {
    marginTop: 55,
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
  textIdentify: {
    fontSize: 22,
    color: "#7A6C5D",
  },
  pickerStyle: {
    width: 150,
    height: 150,
    backgroundColor: "grey",
  },
  pickAnonymous: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 20,
  },
});

export default styles;
