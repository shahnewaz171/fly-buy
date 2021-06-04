import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Button, Text, View, FlatList,  } from "react-native";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Breath of fresh air', rating: 5, key: '1'},
        {title: 'Gotta catch', rating: 3, key: '2'},
        {title: 'Not so "Final" fantasy', rating: 4, key: '3'}
    ])

    console.log(reviews);

    return (
        <View style={globalStyles.container}>
            <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails')}>
                <Text style={globalStyles.titleText}>Newaz</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={globalStyles.titleText}>Mun</Text>
            </TouchableOpacity>
        </View>
    );
}
