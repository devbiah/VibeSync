import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const Person = () => {
  router.push("/Profile");
};

const Home = () => {
    router.push("/Home");
  };
  

const NavTopPlaylist = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.itemContainer} onPress={Home}>
        <Image
          style={styles.img}
          source={require("../assets/img/icon.svg")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Saved Playlists</Text>
      </Pressable>

      <Pressable style={styles.personContainer} onPress={Person}>
        <Image
          style={styles.img}
          source={require("../assets/img/person.svg")}
          resizeMode="contain"
        />
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 50, 
    height: 40,
    
  },
  text:{
    fontWeight:'bold'
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    height: 80,
    paddingHorizontal:15
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  text: {
    color: "#242B33",
    fontSize: 20, 
    fontWeight: "bold",
    marginLeft: 10, 
  },
});

export default NavTopPlaylist;