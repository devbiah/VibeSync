import React from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";

const Artists = ({ artists, onNavigateToDetails }) => {
  return (
    <View style={styles.textFlat}>
      <Text style={styles.textPlay}>Famous Artists</Text>
      <FlatList
        style={styles.flatfirst}
        data={artists}
        keyExtractor={(item) => item.id.toString()} e
        horizontal
        renderItem={({ item, index }) => (
          <Pressable onPress={() => onNavigateToDetails(item.id)}>
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.imageUrl }}
                style={styles.artistImage}
              />
            </View>
            <Text style={[styles.artistName]}>{item.name}</Text>
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlat: {
    padding: 10,
    marginBottom: 50,
  },
  flatfirst: {
    paddingTop: 10,
  },
  textPlay: {
    color: "#242B33",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 15,
    justifyContent: "center",
  },
  imageContainer: {
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
    padding: 4,
  },
  artistImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  artistName: {
    fontSize: 16,
    color: "#242B33",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Artists;
