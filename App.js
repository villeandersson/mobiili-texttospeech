import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View, Button, TextInput } from "react-native";
import * as Speech from "expo-speech";

export default function App() {
  const [puhe, setPuhe] = React.useState("");

  const speak = () => {
    Speech.speak(puhe);
  };
  return (
    <View style={styles.container}>
      <TextInput
        style={{
          fontSize: 18,
          width: 200,
          borderColor: "black",
          borderWidth: 1,
          marginBottom: 15,
        }}
        placeholder="Input text"
        onChangeText={(text) => setPuhe(text)}
      />
      <Button title="Press to hear text" onPress={speak} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
