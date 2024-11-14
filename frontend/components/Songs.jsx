import React from "react"; 
import { FlatList, StyleSheet, Text, View, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Songs = ({ songs, onNavigateToDetails }) => {
  return (
    <View style={styles.textFlat}>
      <Text style={styles.textSong}>Trending Songs</Text>
      <FlatList
        style={styles.flatfirst}
        data={songs} 
        keyExtractor={(item) => item.id.toString()}
        vertical
        renderItem={({ item, index }) => (
          <Pressable 
            onPress={() => onNavigateToDetails(item.id)} 
            style={[styles.card, index % 2 === 0 ? styles.cardDark : styles.cardLight]} 
          >
            <View style={styles.textContainer}>
              <Text 
                style={[styles.title, index % 2 === 0 ? styles.textDark : styles.textLight]} 
                numberOfLines={1} 
                ellipsizeMode="tail"
              >
                {item.title.length > 25 ? item.title.substring(0, 25) + "..." : item.title}
              </Text>
              <Text 
                style={[styles.artist, index % 2 === 0 ? styles.textDark : styles.textLight]}
                numberOfLines={1} 
                ellipsizeMode="tail"
              >
                {item.artist.length > 25 ? item.artist.substring(0, 25) + "..." : item.artist}
              </Text>
            </View>
            <Ionicons 
              name="play-circle-outline" 
              size={44} 
              color={index % 2 === 0 ? "#242B33" : "#B4C6D7"} 
              style={styles.playIcon} 
            />
          </Pressable>
        )}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textFlat: {
    padding: 10
  },
  flatfirst: {
    paddingTop: 20
  },
  textSong: {
    color: "#242B33",
    fontWeight: "bold",
    fontSize: 15,
    marginTop: 10
  },
  card: {
    width: '100%',
    height: 51,
    borderRadius: 19,
    marginVertical: 5,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingVertical: 10
  },
  cardDark: {
    backgroundColor: "#6D8299"
  },
  cardLight: {
    backgroundColor: "#4B5B6C"
  },
  textContainer: {
    flex: 1,
    marginLeft: 10
  },
  title: {
    fontSize: 15,
    fontWeight: "bold"
  },
  artist: {
    fontSize: 15
  },
  playIcon: {
    marginRight: 10
  },
  textDark: {
    color: "#242B33"
  },
  textLight: {
    color: "#B4C6D7" 
  },
});

export default Songs;
