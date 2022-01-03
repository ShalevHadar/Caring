import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  tableHeader: { fontWeight: "bold", fontSize: 20, color: "#7A6C5D" },
  tableDate: {
    justifyContent: "center",
    position: "relative",
    left: 40,
  },
  tableStatus: {
    justifyContent: "center",
    position: "relative",
    left: 20,
  },
  myModal: {
    position: "absolute",
  },
  tableStyle: {
    marginTop: 80,
  },

  tableRow: {
    marginVertical: 1,
    backgroundColor: "#dbbea1",
    borderRadius: 20,
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
