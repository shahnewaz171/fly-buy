import React from 'react'
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default function Footer() {
    return (
        <View style={styles.footer}>
            {/* for opacity */}
            <TouchableOpacity>
            <Text style={{fontSize:30}}>Text</Text>

            </TouchableOpacity>
            
        </View>
    )
}

const styles = StyleSheet.create({
       footer: {
           backgroundColor:'gold',
           justifyContent: 'center',
           alignItems: 'center',
           height:50,
       }
})
