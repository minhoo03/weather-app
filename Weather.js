import React from "react"
import { StyleSheet, View, Text, StatusBar } from "react-native"
import PropTypes from "prop-types"
import { LinearGradient } from "expo-linear-gradient"
import { MaterialCommunityIcons } from "@expo/vector-icons"

const weatherOptions = {
    Clouds: {
        iconName: "weather-cloudy",
        gradient: ["#D7DDE8", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "It's cloudy. You can go outside."
    },
    Thunderstorm:{
        iconName: "weather-lightning-rainy",
        gradient: ["#373B44", "4286f4"],
        title: "Weather Situation Notification",
        subtitle: "It's rainy. Take your umbrella."
    },
    Drizzle:{
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Weather Situation Notification",
        subtitle: "It's rainy. Take your umbrella."
    },
    Rain:{
        iconName: "weather-rainy",
        gradient: ["#4776E6", "#8E54E9"],
        title: "Weather Situation Notification",
        subtitle: "It's rainy. Take your umbrella."
    },
    Snow:{
        iconName: "weather-snowy",
        gradient: ["#7DE2FC", "#B9B6E5"],
        title: "Weather Situation Notification",
        subtitle: "It's snowy. You can go outside."
    },
    Clear:{
        iconName: "weather-sunny",
        gradient: ["#FF7300", "#FEF253"],
        title: "Weather Situation Notification",
        subtitle: "Clear! You can go outside."
    },
    Atmosphere:{
        iconName: "weather-hail",
        gradient: ["#89F7FE", "#66A6FF"],
        title: "Weather Situation Notification",
        subtitle: "The atmosphere is cloudy. Take your umbrella."
    },
    Mist:{
        iconName: "weather-hail",
        gradient: ["#5C258D", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "The atmosphere is cloudy. Take your umbrella."
    },
    Smoke:{
        iconName: "weather-cloudy",
        gradient: ["#D7DDE8", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "The atmosphere is cloudy. Take your umbrella."
    },
    Haze:{
        iconName: "weather-hail",
        gradient: ["#5C258D", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "It's rainy. Take your umbrella."
    },
    Dust:{
        iconName: "weather-hail",
        gradient: ["#5C258D", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "It's rainy. Take your umbrella."
    },
    Tornado: {
        iconName: "weather-hurricane",
        gradient: ["#D7DDE8", "#757F9A"],
        title: "Weather Situation Notification",
        subtitle: "Don't go out because it's dangerous."    
    }
}

export default function Weather({temp, condition}){
    return (
        <LinearGradient
            colors={weatherOptions[condition].gradient}
            style={styles.container}
        >
            <StatusBar barStyle="light-content" />
            <View style={styles.halfContainer}>
                <MaterialCommunityIcons size={96} name={weatherOptions[condition].iconName} color="white" />
                <Text style={styles.temp}>{condition}</Text>
                <Text style={styles.temp}>{temp}º</Text>
            </View>
            <View style={{...styles.halfContainer, ...styles.textContainer}} >
                <Text style={styles.title}>{weatherOptions[condition].title}</Text>
                <Text style={styles.subtitle}>{weatherOptions[condition].subtitle}</Text>
            </View>
        </LinearGradient>
    )
}

Weather.propTypes = {
    temp:PropTypes.number.isRequired,
    condition:PropTypes.oneOf([
        "Thunderstorm",
        "Drizzle",
        "Rain",
        "Snow",
        "Clear",
        "Clouds",
        "Atmosphere",
        "Mist",
        "Smoke",
        "Haze",
        "Dust",
        "Fog",
        "Sand",
        "Dust",
        "Ash",
        "Squail",
        "Tornado"
    ]).isRequired
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    halfContainer: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center"
    },
    temp: {
        fontSize: 24,
        color:"white"
    },
    title:{
        color: "white",
        fontSize: 32,
        fontWeight: "300",
        marginBottom: 16
    },
    subtitle:{
        color: "white",
        fontSize: 24,
        fontWeight: "600"
    },
    textContainer: {
        paddingHorizontal: 20,
        alignItems: "flex-start"
    }
})