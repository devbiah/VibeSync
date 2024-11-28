import React, { useEffect, useState } from "react";
import { FlatList, StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useLocalSearchParams } from "expo-router";
import NavArt from "../../components/NavArt";

const ArtistDetail = () => {
  const { id } = useLocalSearchParams();
  const [albuns, setAlbuns] = useState([]);
  const [artist, setArtist] = useState(null);
  const [loading, setLoading] = useState(true);

  const navigateToDetailsAlbum = (albumId) => {
    router.push(`/Album/${albumId}`);
  };

  useEffect(() => {
    const fetchArtistDetails = async () => {
      try {
        const artistResponse = await fetch(
          `http://localhost:8000/artist/artist/${id}`
        );
        const artistData = await artistResponse.json();
        setArtist(artistData);

        const albumResponse = await fetch(
          `http://localhost:8000/artist/album/${id}`
        );
        const albumData = await albumResponse.json();
        setAlbuns(albumData);

        setLoading(false);
      } catch (error) {
        console.error("Erro ao buscar dados:", error);
        setLoading(false);
      }
    };
    fetchArtistDetails();
  }, [id]);

  if (loading) {
    return <Text>Loading álbum...</Text>;
  }

  return (
    <View style={styles.container}>
      <NavArt />
      <View style={styles.artistContainer}>
        <Image style={styles.coverImage} source={{ uri: artist?.imageUrl }} />
        <View style={styles.textContainer}>
          <Text style={styles.artistName}>{artist?.name}</Text>
          <Text style={styles.artistBio}>{artist?.bio}</Text>
        </View>
      </View>

      <Text style={styles.textSong}>Álbuns</Text>
      <FlatList
        contentContainerStyle={styles.flatListContainer}
        data={albuns}
        keyExtractor={(item) => item.id.toString()}
        numColumns={2}
        renderItem={({ item, index }) => (
          <Pressable
            onPress={() => navigateToDetailsAlbum(item.id)}
            style={[
              styles.card,
              index % 2 === 0 ? styles.cardDark : styles.cardLight,
            ]}
          >
            <View style={styles.imageContainer}>
              <Image
                source={{ uri: item.coverImageUrl }}
                style={styles.albumImage}
              />
              <Ionicons
                name="play-circle-outline"
                size={50}
                color={index % 2 === 0 ? "#242B33" : "#4B5B6C"}
                style={styles.playIcon}
              />
            </View>
            <Text
              style={[
                styles.albumTitle,
                index % 2 === 0 ? styles.textDark : styles.textLight,
              ]}
              numberOfLines={1}
              ellipsizeMode="tail"
            >
              {item.title.length > 15
                ? item.title.substring(0, 15) + "..."
                : item.title}
            </Text>
          </Pressable>
        )}
        showsHorizontalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4C6D7",
    paddingHorizontal: 10,
  },
  textSong: {
    color: "#242B33",
    fontWeight: "bold",
    fontSize: 20,
    marginTop: 40,
    marginLeft: 20,
  },
  flatListContainer: {
    padding: 5,
  },
  artistContainer: {
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 20,
    padding: 20,
    height: 200,
    width: "100%",
    alignSelf: "center",
    marginBottom: 30,
    marginTop: 80, 
  },
  coverImage: {
    width: 150,
    height: 150,
    borderRadius: 100,
    marginBottom: 20,
  },
  textContainer: {
    alignItems: "center",
  },
  artistName: {
    fontWeight: "bold",
    color: "#242B33",
    fontSize: 18,
    textAlign: "center",
  },
  artistBio: {
    color: "#242B33",
    fontSize: 14,
    textAlign: "center",
    width: "100%",
  },
  card: {
    width: "48%",
    height: 220,
    borderRadius: 19,
    margin: 5,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 20,
  },
  cardDark: {
    backgroundColor: "#6D8299",
  },
  cardLight: {
    backgroundColor: "#4B5B6C",
  },
  imageContainer: {
    position: "relative",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 10,
  },
  albumImage: {
    width: 150,
    height: 150,
    borderRadius: 10,
  },
  playIcon: {
    position: "absolute",
    top: 5,
    right: 5,
  },
  albumTitle: {
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    paddingTop: 5,
    marginTop:10
  },
  textDark: {
    color: "#242B33",
  },
  textLight: {
    color: "#B4C6D7",
  },
});

export default ArtistDetail;