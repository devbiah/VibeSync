import { useFonts } from "expo-font";
import { Image } from "expo-image";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";
import { Pressable, StyleSheet, Text, TextInput, View, Alert } from "react-native";
import { useState } from "react";

const Login = () => {
  
  const [fontsLoaded] = useFonts({
    Inter: require("../../assets/font/Inter.ttf"),
    "Inter-Italic": require("../../assets/font/InterBoldItalic.ttf"),
  });
  
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  if (!fontsLoaded) {
    return null;
  }

  const handleSubmit = () => {
    router.push("/Register");
  };
  
  const handleSignIn = async () => {
    try {
      const response = await fetch('http://localhost:8000/auth/login', { 
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Alert.alert('Success', data.msg);
        router.push("/Home");
      } else {
        Alert.alert('Error', data);
      }
    } catch (error) {
      console.error('Error:', error);
      Alert.alert('Error', 'An error occurred while trying to log in.');
    }
  };

  return (
    <LinearGradient colors={["#6D8299", "#242B33"]} style={styles.background}>
      <View style={styles.container}>
        <View style={styles.imageContainer}>
          <Image
            style={styles.img}
            source={require("../../assets/svg/soloIcon.svg")}
          />
        </View>
        <View style={styles.text}>
          <Text style={styles.firstText}>Login to VibeSync</Text>
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
              onChangeText={setUsername}
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
          <Pressable style={styles.loginButton} onPress={handleSignIn}>
            <Text style={styles.loginButtonText}>Login</Text>
          </Pressable>
        </View>
        <Pressable style={styles.button} onPress={handleSubmit}>
          <Text style={styles.signUpText}>
            Don’t have an account? Create here
          </Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  button: {
    justifyContent: "center",
    alignItems: "center",
    marginTop: 15,
  },
  background: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  imageContainer: {
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 1,
  },
  img: {
    width: 52,
    height: 60,
    marginBottom: 20,
  },
  container: {
    backgroundColor: "#B4C6D7",
    borderRadius: 36,
    justifyContent: "center",
    alignItems: "center",
    padding: 20,
    alignSelf: "center",
    height: 450,
    width: 300,
  },
  firstText: {
    fontSize: 25,
    fontWeight: "800",
    fontFamily: "Inter",
    textAlign: "center",
    color: "#242B33",
    marginBottom: 20,
  },
  form: {
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  inputContainer: {
    width: "100%",
    marginBottom: 10,
    alignItems: "flex-start",
  },
  label: {
    color: "#242B33",
    fontWeight: "bold",
    marginBottom: 5,
  },
  textField: {
    width: 260,
    height: 40,
    borderColor: "#6D8299",
    borderWidth: 2,
    borderRadius: 4,
    color: "#6D8299",
    fontWeight: "bold",
    paddingHorizontal: 10,
    textAlign: "left",
    borderRadius: 10,
  },
  loginButton: {
    width: 264.16,
    height: 46.66,
    backgroundColor: "#242B33",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 30,
    marginTop: 10,
  },
  loginButtonText: {
    color: "#B4C6D7",
    fontWeight: "bold",
  },
  signUpText: {
    color: "#242B33",
    fontFamily: "Inter-Italic",
    fontWeight: "bold",
    textDecorationLine: "underline",
    textAlign: "center",
  },
});

export default Login;
