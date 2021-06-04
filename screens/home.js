import React, { useState } from "react";
import { TouchableOpacity, StyleSheet } from "react-native";
import { Text, View, FlatList, Image } from "react-native";
import { Card, ListItem, Button, Icon } from 'react-native-elements';
import { globalStyles } from "../styles/global";
import fakeData from '../fakeData/index';
import { ScrollView } from "react-native";

export default function Home({ navigation }) {
   
    const products = fakeData;
    
    console.log(products);

    const [visible, setVisible] = useState(15);
    const allProducts = products.slice(0, visible);

    const loadMoreProducts =  () => {
        setVisible(previousProducts => previousProducts + 15)
    };

    return (
        <ScrollView style={globalStyles.container}>
            <View style={styles.productStyle}>Products</View>
            {
                allProducts.map(pd => (
                    <Card key={pd.key}>
                        <View>
                            <Card.Image source={{ uri: pd.img }} style={styles.productImg}>
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
            <View style={styles.loadButton}>
                <Button onPress={loadMoreProducts}  title='Load More'></Button>
            </View>
        </ScrollView >
    );
}

const styles = StyleSheet.create({
    productStyle: {
        fontSize: '24px',
        marginLeft: '14px',
        display: 'flex',
        fontWeight: 700,
    },
    productImg: {
        width: '100%',
        objectFit: 'cover',
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
    },
    loadButton: {
        marginBottom: '4rem',
        marginTop: '1.5rem',
        width: '10%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    }
});
