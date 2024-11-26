import { router } from "expo-router"; 
import { Text, Image, View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 40,
    height: 30,
    resizeMode: "contain",
    color: '#242B33'
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 15,
    margin: 10
  },
  textLogoContainer: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 1, 
  },
  text: {
    fontWeight: 'bold',
    color: '#242B33',
    fontSize:16
  }
});

const Home = () => {
  router.push("/Home");
};

const MusicNav = () => {
  return (
    <View style={styles.container}>
      <Pressable onPress={Home}>
        <Image
          style={styles.img}
          source={require("../assets/svg/arrow_back.svg")}
          resizeMode="contain"
        />
      </Pressable>
      <View style={styles.textLogoContainer}>
        <Text style={styles.text}>Now playing music</Text>
        <Image
          style={styles.img}
          source={require("../assets/svg/icon.svg")}
          resizeMode="contain"
        />
      </View>
      <View/>
    </View>
  );
};

export default MusicNav;
