import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View, FlatList, Image } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { globalStyles } from "../styles/global";
import fakeData from '../fakeData/index';

export default function Home({ navigation }) {
    const [reviews, setReviews] = useState([
        {title: 'Breath of fresh air', rating: 5, key: '1'},
        {title: 'Gotta catch', rating: 3, key: '2'},
        {title: 'Not so "Final" fantasy', rating: 4, key: '3'}
    ])

    const users = fakeData;
    console.log(users);
    return (
        <View style={globalStyles.container}>
            <View style={styles.productStyle}>Products</View>
            {
                users.map(pd => (
                    <Card key={pd.key}>
                        <View>
                            <Card.Image source={require('../Images/male.png')} style={styles.productImg}>
                            </Card.Image>
                        </View>
                        <View style={styles.productTitle}>{pd.name}</View>
                        <View style={styles.productFooter}>
                            <Text style={styles.productPrice}>${pd.price}</Text>
                            <Button style={styles.productButton} title='Buy Now' />
                        </View>
                    </Card>
                ))
            }
           
            
            {/* <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails')}>
                <Text style={globalStyles.titleText}>Newaz</Text>
            </TouchableOpacity>
            <TouchableOpacity>
                <Text style={globalStyles.titleText}>Mun</Text>
            </TouchableOpacity> */}
        </View>
    );
}

const styles = StyleSheet.create({
    productStyle: {
        fontSize: '24px',
        marginLeft: '14px',
        display: 'flex',
        fontWeight: 700
    },
    productImg: {
        width: '100%',
    },
    productTitle: {
        color: '#34265f',
        marginBottom: '1rem',
        marginTop: '1rem',
        fontWeight: 700,
        fontSize: '18px'
    },
    productFooter: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    productPrice: {
        color: '#f5b622de',
        fontWeight: 700,
        fontSize: '20px'
    }
});
