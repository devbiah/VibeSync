// const [name, setName] = React.useState('');
// const [email, setEmail] = React.useState('');
// const [password, setPassword] = React.useState('');

// const fetchData = async () => {
//     try {
//         console.log(name, email, password)

//         const response = await fetch('https://taskhub-s37f.onrender.com/auth/signup', {
//             method: "POST",
//             headers: {
//                 Accept: 'application/json',
//                 "Content-Type": 'application/json'
//             },
//             body: JSON.stringify({
//                 "name": name,
//                 "email": email,
//                 "password": password
//             })
//         }
//         ).then((response) => {
//             if (response.status == 200)
//                 alert('Usuário criado com sucesso')
//         })
//     } catch (error) {
//         console.error("Erro: ", error)
//     }
// }
//   <View>
//                 <TextInput value={name} onChangeTextHandler={setName} label={"Nome"} />
//           <TextInput value={email} onChangeTextHandler={setEmail} label={"Email"} />
//                 <TextInput value={password} onChangeTextHandler={setPassword} label={"Senha"} /> 
//             </View> 
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

    const [birthDate, setBirthDate] = useState('');

    if (!fontsLoaded) {
        return null;
    }

    const handleSubmit = () => {
        router.push('/Login');
    };

    const handleSignIn = () => {
        router.push('/Login');
    };

    const handleDateChange = (text) => {
        // Permitir apenas números e o caractere de hífen
        const formattedText = text.replace(/[^0-9-]/g, '');

        // Limitar o formato a "YYYY-MM-DD"
        if (formattedText.length <= 10) {
            setBirthDate(formattedText);
        }
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
                            selectionColor="#000000" // Cursor color
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Email</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Enter your email"
                            keyboardType="email-address"
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000" // Cursor color
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Password</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Enter your password"
                            secureTextEntry
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000" // Cursor color
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Confirm Password</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="Confirm your password"
                            secureTextEntry
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000" // Cursor color
                        />
                    </View>
                    <View style={styles.inputContainer}>
                        <Text style={styles.label}>Birth Date</Text>
                        <TextInput
                            style={styles.textField}
                            placeholder="DD-MM-YYYY"
                            placeholderTextColor="#6D8299"
                            selectionColor="#000000" // Cursor color
                            keyboardType="numeric" // Mostrar teclado numérico
                            value={birthDate}
                            onChangeText={handleDateChange} // Lidar com a mudança de texto
                        />
                    </View>
                    <Pressable
                        style={styles.createButton}
                        onPress={handleSubmit}
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
