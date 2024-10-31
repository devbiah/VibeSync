import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const Home = () => {
  router.push("/Home");
};

const Profile = () => {
  router.push("/Profile");
};

const NavTop = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.itemContainer} onPress={Home}>
        <Image
          style={styles.img}
          source={require("../assets/svg/icon.svg")}
          resizeMode="contain"
        />
        <Text style={styles.text}>Recommended</Text>
      </Pressable>
      <Pressable style={styles.personContainer} onPress={Profile}>
        <Image
          style={styles.img}
          source={require("../assets/svg/person.svg")}
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
  container: {
    flexDirection: "row",
    justifyContent: "space-between", 
    alignItems: "center",
    height: 80,
    paddingHorizontal: 15,
  },
  itemContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  personContainer: {
    paddingHorizontal: 10, 
  },
  text: {
    color: "#242B33",
    fontSize: 20, 
    fontWeight: "bold",
    marginLeft: 10, 
  },
});

export default NavTop;
