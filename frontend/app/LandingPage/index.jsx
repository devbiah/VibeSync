import React from "react";
import { StyleSheet, Button, Image } from "react-native";
import { LinearGradient } from "expo-linear-gradient";
import { Link } from "expo-router";

const LandingPage =() =>{
  return (
    <LinearGradient colors={["#B4C6D7", "#242B33"]} style={styles.container}>
      <Image
        source={require("../../assets/images/icontitle.svg")}
        style={styles.image}
      />
      <Link href="/register">
        <Button>Join</Button>
      </Link>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  text: {
    marginTop: 20,
    fontSize: 20,
    color: "#fff",
  },
  button: {
    backgroundColor: "#B4C6D7",
    width: 303,
    height: 58,
    textAlign: "center",
    alignContent: "center",
    borderRadius: 89,
    color: "#242B33",
    lineHeight: 58,
  },
});
export default LandingPage