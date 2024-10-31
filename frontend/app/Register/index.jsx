import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { StyleSheet, Text, View, TextInput, Pressable } from "react-native";
import { useFonts } from 'expo-font';
import React, { useState } from "react";

export default Register = () => {
    const [fontsLoaded] = useFonts({
        'Inter': require('../../assets/font/Inter.ttf'),
        'Inter-Italic': require('../../assets/font/InterBoldItalic.ttf'),
    });
    const [username, setUserame] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');



    if (!fontsLoaded) {
        return null;
    }

    const handleSignUp = async () => {
        if (password !== confirmPassword) {
            alert("Passwords do not match!");
            return;
        }

        try {
            const response = await fetch('http://localhost:8000/auth/signup', {
                method: "POST",
                headers: {
                    Accept: 'application/json',
                    "Content-Type": 'application/json'
                },
                body: JSON.stringify({
                    username,
                    email,
                    password
                })
            });

            if (response.ok) {
                alert('User created successfully');
                router.push('/Login');
            } else {
                const errorResponse = await response.json();
                alert(errorResponse.message || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error: ", error);
            alert("An error occurred. Please try again later.");
        }

    };
    const handleSignIn = () => {
        router.push('/Login');
    };

    return (
        <LinearGradient
            colors={['#6D8299', '#242B33']}
            style={styles.background}
        >
            <View style={styles.container}>
                <View style={styles.imageContainer}>
                    <Image
                        style={styles.img}
                        source={require('../../assets/img/soloIcon.svg')}
                    />
                </View>
                <View style={styles.text}>
                    <Text style={styles.firstText}>Create your Account</Text>
                </View>
                <View style={styles.form}>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Username</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Enter your username"
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000"
                            value={username}
                            onChangeText={setUserame} 
                            />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000"
                            value={email}
                            onChangeText={setEmail}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Enter your password"
                            secureTextEntry
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000"
                            value={password}
                            onChangeText={setPassword}
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Confirm your password"
                            secureTextEntry
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000"
                            value={confirmPassword}
                            onChangeText={setConfirmPassword}
                        />
                    </View>
                    <Pressable
                        style={styles.createButton}
                        onPress={handleSignUp}
                    >
                        <Text style={styles.createButtonText}>Create</Text>
                    </Pressable>
                </View>
                <Pressable style={styles.button} onPress={handleSignIn}>
                    <Text style={styles.signInText}>
                        Already have an account? Sign-in
                    </Text>
                </Pressable>
            </View>
        </LinearGradient>
    );
};

const styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 15,
    },
    background: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    imageContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 1,
    },
    img: {
        width: 52,
        height: 60,
        marginBottom: 20,
    },
    container: {
        backgroundColor: '#B4C6D7',
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        alignSelf: 'center',
        minHeight: 500,
    },
    firstText: {
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'Inter',
        textAlign: 'center',
        color: '#242B33',
        marginBottom: 20,
    },
    form: {
        width: '100%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    inputContainer: {
        width: '100%',
        marginBottom: 10,
        alignItems: 'flex-start',
    },
    label: {
        color: '#242B33',
        fontWeight: 'bold',
        marginBottom: 5,
    },
    textField: {
        width: 260,
        height: 40,
        borderColor: '#6D8299',
        borderWidth: 2,
        borderRadius: 4,
        color: '#6D8299',
        fontWeight: 'bold',
        paddingHorizontal: 10,
        textAlign: 'left',
        borderRadius: 10,
    },
    createButton: {
        width: 264.16,
        height: 46.66,
        backgroundColor: '#242B33',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 30,
        marginTop: 10,
    },
    createButtonText: {
        color: '#B4C6D7',
        fontWeight: 'bold',
    },
    signInText: {
        color: '#242B33',
        fontFamily: 'Inter-Italic',
        fontWeight: 'bold',
        textDecorationLine: 'underline',
        textAlign: 'center',
    },
});
