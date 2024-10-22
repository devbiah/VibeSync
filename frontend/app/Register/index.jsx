import { Button, Container, TextField } from "@mui/material";
import { Image } from "expo-image";
import { LinearGradient } from 'expo-linear-gradient';
import { router } from "expo-router";
import { StyleSheet, Text, View, Pressable } from "react-native";
import { useFonts } from 'expo-font';


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
export default Login = () => {
    const [fontsLoaded] = useFonts({
        'Inter-Italic': require('../../assets/font/InterBoldItalic.ttf'),
    });
    const handleSubmit = () => {
        router.push('/Login')
    };
    const handleSignIn = () => {
        router.push('/Login')
    };

    return (
        <LinearGradient
            colors={['#6D8299', '#242B33']}
            style={styles.background}
        >
            <View style={styles.container}>
                <Container maxWidth="sm" sx={styles.formContainer}>
                    <View style={styles.imageContainer}>
                        <Image
                            style={styles.img}
                            source={require('../../assets/img/soloIcon.svg')}
                        />
                    </View>
                    <View style={styles.text}>
                        <h2 style={styles.firstText}>Create your Account</h2>
                    </View>
                    <form onSubmit={handleSubmit} style={styles.form}>
                        <TextField
                            fullWidth
                            label="Username"
                            type="text"
                            required
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="Email"
                            type="email"
                            required
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="Password"
                            type="password"
                            required
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="Confirm Password"
                            type="password"
                            required
                            sx={styles.textField}
                        />
                        <TextField
                            fullWidth
                            label="Birth Date"
                            type="date"
                            required
                            InputLabelProps={{
                                shrink: true,
                            }}
                            sx={styles.textField}
                        />
                        <Button
                            type="submit"
                            variant="contained"
                            sx={styles.submitButton}
                        >
                            Create
                        </Button>
                    </form>
                    <Pressable style={styles.button} onPress={handleSignIn}>
                        <Text
                            style={{
                                color: '#242B33',
                                fontFamily: 'Inter-Italic',
                                fontStyle: 'italic',
                                textDecorationLine: 'underline',
                                fontWeight: 'bold',
                                justifyContent: 'center',
                                alignItems: 'center',
                            }}>
                            Alredy have an account? Sign-in
                        </Text>
                    </Pressable>
                </Container>
            </View>
        </LinearGradient>
    );
}

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
        marginVertical: 10,
    },
    img: {
        width: 52,
        height: 60,
    },
    container: {
        width: 328.37,
        height: 635,
        backgroundColor: '#B4C6D7',
        borderRadius: 36,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
    },
    formContainer: {
        width: '100%',
        height: '100%',
    },
    firstText: {
        fontSize: 25,
        fontWeight: '800',
        fontFamily: 'Inter',
        textAlign: 'center',
        color: '#242B33',
        whiteSpace: 'nowrap',
        overflow: 'hidden',
    },
    text: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    form: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        width: '100%',
    },
    textField: {
        width: 260.3,
        height: 42.29,
        marginBottom: 4,
        '& .MuiOutlinedInput-root': {
            '& fieldset': {
                borderColor: '#6D8299',
                borderWidth: 2,
            },
            '&:hover fieldset': { borderColor: '#6D8299' },
            '&.Mui-focused fieldset': { borderColor: '#6D8299' },
        },
        '& .MuiInputBase-input': {
            color: '#6D8299',
            fontWeight: 'bold',
        },
        '& .MuiInputLabel-root': {
            '&.Mui-focused': { color: '#242B33' },
            color: '#6D8299',
            fontWeight: 'bold',
        },
    },
    submitButton: {
        backgroundColor: '#242B33',
        color: '#B4C6D7',
        borderRadius: 89,
        width: 264.16,
        height: 46.66,
        '&:hover': {
            backgroundColor: '#1f1f1f',
        },
    },
});