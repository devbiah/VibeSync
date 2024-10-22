import { Image } from "expo-image";
import { StyleSheet, View, Text, Pressable } from "react-native";
import { router } from "expo-router";

const Home = () => {
  router.push("/Home");
};
const Search = () => {
  router.push("/Search");
};
const Save = () => {
  router.push("/Save");
};

const NavBar = () => {
  return (
    <View style={styles.container}>
      <Pressable style={styles.itemContainer} onPress={Home}>
        <Image
          style={styles.img}
          source={require("../assets/img/home.svg")}
          resizeMode="contain"
        />
        <Text style={styles.label}>Home</Text>
      </Pressable>

      <Pressable style={styles.itemContainer} onPress={Search}>
        <Image
          style={styles.img}
          source={require("../assets/img/search.svg")}
          resizeMode="contain"
        />
        <Text style={styles.label}>Search</Text>
      </Pressable>

      <Pressable style={styles.itemContainer} onPress={Save}>
        <Image
          style={styles.img}
          source={require("../assets/img/save.svg")}
          resizeMode="contain"
        />
        <Text style={styles.label}>Save</Text>
      </Pressable>
    </View>
  );
};

const styles = StyleSheet.create({
  img: {
    width: 100,
    height: 50,
  },
  container: {
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
    height: 80,
    backgroundColor: "#242B33",
    paddingVertical: 10,
  },
  itemContainer: {
    alignItems: "center",
  },
  label: {
    color: "#B4C6D7",
    fontWeight: "bold",
    marginTop: 5,
  },
});

export default NavBar;
