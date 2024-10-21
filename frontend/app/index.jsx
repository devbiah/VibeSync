import React from "react";
import { Text, View, StyleSheet, Pressable, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";

const firstIcon = require("../assets/img/firstIcon.svg"); 

export default FirstPage = () => {

    const handleSignUp = () => {
        navigation.navigate("Login"); 
    };

    return (
        <LinearGradient colors={["#6D8299", "#242B33"]} style={styles.gradient}>
            <View style={styles.container}>
                <View>
                    <Image source={firstIcon} style={styles.img} /> 
                </View>

                <Pressable style={styles.button} onPress={handleSignUp}>
                    <Text style={{ color: '#242B33', fontSize: 25 }}>Join</Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    gradient: {
        flex: 1,
    },
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        gap: 100,
    },
    button: {
        backgroundColor: '#B4C6D7',
        width: 303,
        height: 58,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 89,
        marginTop: 200,
    },
});