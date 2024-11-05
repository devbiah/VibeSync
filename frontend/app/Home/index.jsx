import { FlatList, StyleSheet, Text, View } from "react-native";
import NavBar from "../../components/NavBar";
import NavTop from "../../components/NavTop";

const Home = () => {
  return (
    <View style={styles.container}>
      <NavTop/>
      <Text>Recommended Playlist</Text>
      <FlatList />
      <Text>Trending Songs</Text>
      <FlatList />
      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#B4C6D7",
  },
  imageContainer: {
    marginBottom: 1,
    
  },
  img: {
    width: 62,
    height: 60,
  },
});

export default Home;
