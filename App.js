import React from "react";
import { StyleSheet, Text, SafeAreaView, ScrollView } from "react-native";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        <Home></Home>
      </ScrollView>
    </SafeAreaView>
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
