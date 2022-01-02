import React, { useState } from "react";
import { View, Text, FlatList, LogBox, ScrollView } from "react-native";
import { DataTable } from "react-native-paper";
import styles from "../style/DashboardStyle";
import MyDataRow from "../component/MyDataRow";
import { Modal, Portal, Provider } from "react-native-paper";

const Dashboard = () => {
  const [visible, setVisible] = useState(false);
  const [studentData, setStudentData] = useState({});
  const showModal = () => setVisible(true);
  const hideModal = () => setVisible(false);

  const containerStyle = { backgroundColor: "white", padding: 30 };
  const [Incidents, setIncidents] = useState([
    {
      incident_id: 12124,
      student_id: 123312,
      teacher_name: "Ofek",
      grade: "Fifth Grade",
      content: "The Content",
      teacher_response: "The Teacher Response",
      admission_date: "01-01-2022",
      status: false,
    },
  ]);

  const sendData = (index) => {
    showModal();
    changeClass();
  };

  const changeClass = () => {
    setIncidents(
      [...Incidents].map((object) => {
        if (object.teacher_name == "Ofek") {
          return {
            ...object,
            grade: "Seven Grade",
          };
        } else return object;
      })
    );
  };

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
                Incident ID: {Incidents[0].incident_id} {"\n"}
                Date: {Incidents[0].student_id}
                {"\n"}
                Student: {Incidents[0].student_id} {"\n"}
                Teacher: {Incidents[0].teacher_name} {"\n"}
                Grade: {Incidents[0].grade} {"\n"}
                Content: {Incidents[0].content} {"\n"}
                Teacher Response: {Incidents[0].teacher_response}
                {"\n"}
                Status: {Incidents[0].status}
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
