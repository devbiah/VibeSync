import { FlatList, StyleSheet, Text, View } from "react-native";
import NavTopPlaylist from "../../components/NavPlayList";
import NavBar from "../../components/NavBar";

const SavedPlaylist = () => {
  return (
    <View style={styles.container}>
      <NavTopPlaylist/>
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
});

export default SavedPlaylist;
