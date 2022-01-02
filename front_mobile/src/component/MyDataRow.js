import React, { useState } from "react";
import { DataTable } from "react-native-paper";
import styles from "../style/DashboardStyle";
import { AntDesign, Entypo } from "@expo/vector-icons";

const MyDataRow = ({ item, sendData }) => {
  return (
    <>
      <DataTable.Row
        style={styles.tableRow}
        onPress={() => sendData(item.incident_id)}
      >
        <DataTable.Cell>{item.content}</DataTable.Cell>
        <DataTable.Cell style={styles.tableDate} numeric>
          {item.admission_date.substr(0, 10)}
        </DataTable.Cell>
        <DataTable.Cell style={styles.tableStatus} numeric>
          {item.completed ? (
            <AntDesign name="checkcircle" size={24} color="black" />
          ) : (
            <Entypo name="circle" size={24} color="black" />
          )}
        </DataTable.Cell>
      </DataTable.Row>
    </>
  );
};

export default MyDataRow;
