import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';
import { Card, ListItem, Button, Icon } from 'react-native-elements';

export default function ProductLists({ product }) {

    const { title, price, description, category, image } = product;

    return (
        <Card>
            <Card.Title>{title}</Card.Title>
            <Card.Image source={{ uri: image }}>
                <Card.Divider />
                <Text>Category: {category}</Text>
                <Text>Price: {price}</Text>
                <Button
                    icon={<Icon name='code' color='#ffffff' />}
                    buttonStyle={{ borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, width:200 }}
                    title='BUY NOW' />
            </Card.Image>
        </Card>
    )
}

const styles = StyleSheet.create({
    productImage: {
        width: 80,
        height: 80
    }
})
