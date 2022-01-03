import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  tableHeader: {
    fontWeight: "bold",
    fontSize: 20,
    color: "#0645AD",
  },
  tableDate: {
    justifyContent: "center",
    position: "relative",
    left: 40,
  },
  tableStatus: {
    justifyContent: "center",
    position: "relative",
    left: 25,
  },
  tableStatus2: {
    justifyContent: "center",
    position: "relative",
    left: 35,
  },
  myModal: {
    position: "absolute",
  },
  tableStyle: {
    marginTop: 40,
    paddingVertical: 40,
  },

  tableRow: {
    marginVertical: 2,
    backgroundColor: "#fff",
    borderColor: "#dbbea1",
    borderWidth: 2,
    borderBottomColor: "#dbbea1",
    borderBottomWidth: 2,
    borderRadius: 10,
    marginHorizontal: 10,
  },
  ModalStyle: {
    backgroundColor: "white",
    padding: 20,
  },
  InnerModalText: {
    fontSize: 20,
    lineHeight: 30,
  },
});

export default styles;
