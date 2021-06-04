import React, { useState } from "react";
import { TouchableOpacity } from "react-native";
import { Text, View, FlatList, Image } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements'
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Breath of fresh air', rating: 5, key: '1'},
        {title: 'Gotta catch', rating: 3, key: '2'},
        {title: 'Not so "Final" fantasy', rating: 4, key: '3'}
    ])

    const users = [
        {
           name: 'brynn',
           avatar: 'https://s3.amazonaws.com/uifaces/faces/twitter/brynn/128.jpg'
        },
    ]

    return (
        <View style={globalStyles.container}>
            <Card>
                <Card.Image source={require('../Images/male.png')}>
                    <Text style={{marginBottom: 10}}>
                    The idea with React Native Elements is more about component structure than actual design.
                    </Text>
                    <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    title='VIEW NOW' />
                </Card.Image>
            </Card>
            {/* <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails')}>
                <Text style={globalStyles.titleText}>Newaz</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={globalStyles.titleText}>Mun</Text>
            </TouchableOpacity> */}
        </View>
    );
}
