import { Image } from "expo-image";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { router } from "expo-router";

export default FirstPage = () => {
  const handleSignUp = () => {
    router.push("/Register");
  };

  return (
    <LinearGradient colors={["#6D8299", "#242B33"]} style={styles.gradient}>
      <View style={styles.container}>
        <View>
          <Image
            style={styles.img}
            source={require("../assets/img/firstIcon.svg")}
          />
        </View>

        <Pressable style={styles.button} onPress={handleSignUp}>
          <Text style={{ color: "#242B33", fontSize: 25 }}>Join</Text>
        </Pressable>
      </View>
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  gradient: {
    flex: 1,
  },
  img: {
    marginTop: 50,
    width: 200,
    height: 190,
  },

  button: {
    backgroundColor: "#B4C6D7",
    width: 303,
    height: 58,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 89,
    marginTop: 200,
  },
});
