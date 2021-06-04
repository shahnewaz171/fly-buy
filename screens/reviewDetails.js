import React from "react";
import { Button, Text, View } from "react-native";
import { globalStyles } from "../styles/global";

export default function ReviewDetails({ navigation }) {
    // const pressHandler = () => {
    //     navigation.goBack();
    // }
  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.titleText}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint architecto provident quaerat.</Text>

      {/* <Button title='back to home screen' onPress={pressHandler}></Button> */}
    </View>
  );
}
