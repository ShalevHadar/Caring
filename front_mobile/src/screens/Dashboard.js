import React, { useEffect, useState } from "react";
import { View, Text, FlatList, LogBox, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import styles from "../style/DashboardStyle";
import MyDataRow from "../component/MyDataRow";
import { Modal, Portal, Provider } from "react-native-paper";
import handleApi from "../api/handleApi";
import stringifyNumber from "../functions/numberGrades";

const Dashboard = ({ route }) => {
  const { student_id, token } = route.params;
  const [visible, setVisible] = useState(false);
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);
  const [singleIncident, setSingleIncident] = useState({});

  const containerStyle = { backgroundColor: "white", padding: 30 };
  const [Incidents, setIncidents] = useState([]);

  useEffect(async () => {
    await handleApi
      .get(`/incident/${student_id}`, {
        params: {
          token,
        },
      })
      .then((res) => {
        setIncidents(res.data.studentData);
      })
      .catch((err) => console.log(err));
  }, []);

  const sendData = (index) => {
    showModal();
    changeClass(index);
  };

  const changeClass = (index) => {
    Incidents.map((object) => {
      if (object.incident_id == index) {
        setSingleIncident(object);
      }
    });
  };

  function capitalizeFirstLetter(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  return (
    <View style={styles.container}>
      <>
        <DataTable style={styles.tableStyle}>
          <DataTable.Header>
            <DataTable.Title>
              <Text style={styles.tableHeader}>Incident</Text>
            </DataTable.Title>
            <DataTable.Title style={styles.tableDate} numeric>
              <Text style={styles.tableHeader}>Date</Text>
            </DataTable.Title>
            <DataTable.Title numeric style={styles.tableStatus}>
              <Text style={styles.tableHeader}>Status</Text>
            </DataTable.Title>
          </DataTable.Header>
          <ScrollView>
            {Incidents.map((item) => {
              return (
                <MyDataRow
                  key={item.incident_id}
                  item={item}
                  sendData={sendData}
                />
              );
            })}
            <Text></Text>
          </ScrollView>
        </DataTable>
        <Provider>
          <Portal>
            <Modal
              visible={visible}
              onDismiss={hideModal}
              contentContainerStyle={containerStyle}
            >
              <Text style={styles.InnerModalText}>
                {singleIncident.isAnonymous ? "Anonymous" : "Not Anonymous"}{" "}
                {"\n"}
                Incident ID:
                {singleIncident.incident_id} {"\n"}
                Date:{" "}
                {singleIncident.admission_date
                  ? singleIncident.admission_date.substr(0, 10)
                  : ""}
                {/* {"\n"}
                Student: {singleIncident.student_id} */}
                {"\n"}
                Teacher:{" "}
                {singleIncident.teacher_id
                  ? capitalizeFirstLetter(singleIncident.teacher_id)
                  : ""}
                {"\n"}
                Grade:{" "}
                {singleIncident.class_id
                  ? capitalizeFirstLetter(
                      stringifyNumber(singleIncident.class_id)
                    ) + " Grade"
                  : ""}
                {"\n"}
                Content: {singleIncident.content}
                {"\n"}
                Teacher Response: {singleIncident.teacher_response}
                {"\n"}
                Status: {singleIncident.completed}
                {"\n"}
              </Text>
            </Modal>
          </Portal>
        </Provider>
      </>
    </View>
  );
};

export default Dashboard;
