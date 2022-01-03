import * as React from "react";
import { Text, View, StyleSheet, TextInput, Button } from "react-native";
import * as SecureStore from "expo-secure-store";

export async function save(key, value) {
  await SecureStore.setItemAsync(key, value);
}

export async function getValueFor(key) {
  let result = await SecureStore.getItemAsync(key);
  if (result) {
    return result;
  } else {
    alert("No values stored under that key.");
  }
}

export default function App() {
  const [key, onChangeKey] = React.useState("Your key here");
  const [value, onChangeValue] = React.useState("Your value here");

  return (
    <View style={styles.container}>
      <Text style={styles.paragraph}>Save an item, and grab it later!</Text>

      <Button
        title="Save this key/value pair"
        onPress={() => {
          save(key, value);
          onChangeKey("Your key here");
          onChangeValue("Your value here");
        }}
      />

      <Text style={styles.paragraph}>🔐 Enter your key 🔐</Text>
      <TextInput
        style={styles.textInput}
        onSubmitEditing={(event) => {
          getValueFor(event.nativeEvent.text);
        }}
        placeholder="Enter the key for the value you want to get"
      />
    </View>
  );
}
