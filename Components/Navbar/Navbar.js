import React from "react";
import { StyleSheet, View } from "react-native";
import { Header } from "react-native-elements";

export default function Navbar() {
  return (
    <View style={styles.container}>
      <Header
        leftComponent={{ icon: "menu", color: "#fff" }}
        centerComponent={{ text: "Fly Buy", style: { color: "#fff" } }}
        rightComponent={{ icon: "shop-cart", color: "#fff" }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 2,
    paddingBottom: 2,
    backgroundColor: "#ecf0f1",
  },
});
