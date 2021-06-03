<<<<<<< HEAD
import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
=======
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, SafeAreaView, ScrollView } from 'react-native';
import Home from './components/Home/Home';
>>>>>>> dafefd6beab766b3e473ce32dbd82748e85a94f7

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
