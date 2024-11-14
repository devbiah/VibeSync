import { router } from "expo-router";
import { Text, Image, View, StyleSheet, Pressable } from "react-native";

const styles = StyleSheet.create({
  img: {
    width: 50,
    height: 40,
    resizeMode: "contain",
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 80,
    paddingHorizontal: 15,
  },
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
      <Text>Now playing music</Text>
      <Image
        style={styles.img}
        source={require("../assets/svg/icon.svg")}
        resizeMode="contain"
      />
    </View>
  );
};

export default MusicNav;
