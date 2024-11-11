import { FlatList, StyleSheet, Text, View } from "react-native";
import NavBar from "../../components/NavBar";
import NavTopSearch from "../../components/NavTopSearch";

const Search = () => {
  return (
    <View style={styles.container}>
      <NavTopSearch/>
      <FlatList />
      <NavBar/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4C6D7",
  },
});

export default Search;
