import React from "react";
import { StyleSheet } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";
import Navigator from "./routes/drawer";


export default function App() {
  return (
    <SafeAreaProvider style={styles.container}>
      <Navigator></Navigator>
    </SafeAreaProvider>

  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#fff",
  },
});

