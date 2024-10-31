import { Image } from "expo-image";
import { Pressable, StyleSheet, TextInput, View } from "react-native";

const NavTopSearch = () => {
  return (
    <View style={styles.container}>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.textField}
          placeholder="Playlists, Musics or Artists"
          placeholderTextColor="#6D8299"
          selectionColor="#000000"
        />
        <Pressable style={styles.itemContainer}>
          <Image
            style={styles.img}
            source={require("../assets/svg/searchDark.svg")}
            resizeMode="contain"
          />
        </Pressable>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    justifyContent: "center", 
    alignItems: "center",
    height: 80,
    paddingHorizontal: 100,
  },
  searchContainer: {
    flexDirection: "row",
    alignItems: "center",
    flex: 1, 
    paddingLeft:50
  },
  itemContainer: {
    marginLeft: 10, 
  },
  textField: {
    flex: 1,
    height: 40,
    borderColor: "#242B33",
    borderWidth: 2,
    borderRadius: 50, 
    color: "#242B33", 
    fontWeight: "bold",
    paddingHorizontal: 10,
    textAlign: "left",
  },
  img: {
    width: 70,
    height: 100,
  },
});

export default NavTopSearch;
