import React from "react"
import { StyleSheet, Text, View, StatusBar } from "react-native"

export default function Loading(){
    return (
        <View style={styles.container}>
            <StatusBar barStyle="light-content" />
            <Text style={styles.text}>Getting the fucking weather</Text>
        </View>
    )
    
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        paddingHorizontal: 30, // left
        paddingVertical: 100, // bottom,
        backgroundColor: "#FDF6AA"
    },
    text: {
        color: "#383838",
        fontSize: 30
    }
})