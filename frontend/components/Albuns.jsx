import React from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

const Albuns = ({ albuns, onNavigateToDetails }) => {
    return (
        <View style={styles.textFlat}>
            <Text style={styles.textPlay}>Recommended Playlist</Text>
            <FlatList
                style={styles.flatfirst}
                data={albuns}
                keyExtractor={(item) => item.id.toString()}
                horizontal
                renderItem={({ item, index }) => (
                    <Pressable onPress={() => onNavigateToDetails(item.id)} style={[styles.card, index % 2 === 0 ? styles.cardDark : styles.cardLight]}>
                        <View style={styles.imageContainer}>
                            <Image source={{ uri: item.coverImageUrl }} style={styles.image} />
                            <Ionicons
                                name="play-circle-outline"
                                size={50}
                                color={index % 2 === 0 ? "#242B33" : "#4B5B6C"}
                                style={styles.playIcon}
                            />
                        </View>
                        <Text style={[styles.title, index % 2 === 0 ? styles.textDark : styles.textLight]} numberOfLines={1} ellipsizeMode="tail">
                            {item.title}
                        </Text>
                        <Text style={[styles.artist, index % 2 === 0 ? styles.textDark : styles.textLight]} numberOfLines={1} ellipsizeMode="tail">
                            {item.artist}
                        </Text>
                    </Pressable>
                )}
                showsHorizontalScrollIndicator={false}
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
    textPlay: {
        color: "#242B33",
        fontWeight: "bold",
        marginTop: 5,
        fontSize: 15
    },
    card: {
        width: 157,
        height: 206,
        borderRadius: 19,
        marginHorizontal: 5,
        padding: 10,
        alignItems: "center"
    },
    cardDark: {
        backgroundColor: "#6D8299"
    },
    cardLight: {
        backgroundColor: "#4B5B6C"
    },
    imageContainer: {
        position: "relative",
        width: 134,
        height: 134,
        marginBottom: 8,
        justifyContent: "center",
        alignItems: "center"
    },
    image: {
        width: "100%",
        height: "100%",
        borderRadius: 10
    },
    playIcon: {
        position: "absolute",
        top: "40%",
        left: "40%",
        transform: [{ translateX: -12 },
        { translateY: -12 }]
    },
    title: {
        fontSize: 16,
        fontWeight: "bold"
    },
    artist: {
        fontSize: 14,
        marginTop: 4
    },
    textDark: {
        color: "#242B33"
    },
    textLight: {
        color: "#B4C6D7"
    },
});

export default Albuns;
