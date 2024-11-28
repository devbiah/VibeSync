import {
    Text,
    StyleSheet,
    View,
    Image,
    FlatList,
    Pressable,
  } from "react-native";
  import Playlist from "../../components/PlayList";
  import { Ionicons } from "@expo/vector-icons";
  import { useEffect, useState } from "react";
  import { router, useLocalSearchParams } from "expo-router";
  
  export default function AlbumDetail() {
    const { id } = useLocalSearchParams();
    const [album, setAlbum] = useState(null);
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [loadingSongs, setLoadingSongs] = useState(true);
  
    const navigateToDetailsSong = (songId) => {
      router.push(`/Song/${songId}`);
    };
  
    useEffect(() => {
      const fetchAlbum = async () => {
        try {
          const albumResponse = await fetch(
            `http://localhost:8000/artist/albums/${id}`
          );
          const albumData = await albumResponse.json();
          setAlbum(albumData);
          setLoading(false);
        } catch (error) {
          console.error("Error fetching album details:", error);
          setLoading(false);
        }
      };
  
      const fetchSongs = async () => {
        try {
          const songsResponse = await fetch(
            `http://localhost:8000/artist/albums/${id}/musics`
          );
          const songsData = await songsResponse.json();
          setSongs(songsData);
          setLoadingSongs(false);
        } catch (error) {
          console.error("Error fetching songs:", error);
          setLoadingSongs(false);
        }
      };
  
      fetchAlbum();
      fetchSongs();
    }, [id]);
  
    if (loading || loadingSongs) {
      return <Text>Loading...</Text>;
    }
  
    return (
      <View style={styles.container}>
        <Playlist />
        <View style={styles.albumContainer}>
          <Image
            style={styles.coverImage}
            source={{ uri: album.coverImageUrl }}
          />
          <View style={styles.textContainer}>
            <Text style={styles.songTitle}>{album.title}</Text>
            <Text style={styles.artistName}>{album.Artist.name}</Text>
            <Image
              style={styles.play}
              source={require("../../assets/svg/player.svg")}
            />
          </View>
        </View>
        <Text style={styles.textSong}>Songs</Text>
        <FlatList
          style={styles.flatfirst}
          data={songs}
          keyExtractor={(item) => item.id.toString()}
          vertical
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => navigateToDetailsSong(item.id)} 
              style={[
                styles.card,
                index % 2 === 0 ? styles.cardDark : styles.cardLight,
              ]}
            >
              <View style={styles.textContainer}>
                <Text
                  style={[
                    styles.title,
                    index % 2 === 0 ? styles.textDark : styles.textLight,
                  ]}
                  numberOfLines={1}
                  ellipsizeMode="tail"
                >
                  {item.title}
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
  }
  
  const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#B4C6D7",
    },
    textSong: {
      color: "#242B33",
      fontWeight: "bold",
      fontSize: 20,
      marginTop: 10,
      marginLeft: 20,
    },
    play: {
      width: 30,
      height: 30,
      marginTop: 10,
    },
    albumContainer: {
      flexDirection: "row",
      alignItems: "center",
      borderRadius: 20,
      backgroundColor: "#6D8299",
      padding: 10,
      height: 159,
      width: 332,
      alignSelf: "center",
    },
    coverImage: {
      width: 130,
      height: 130,
      marginRight: 15,
      borderRadius:10
    },
    textContainer: {
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "55%",
    },
    songTitle: {
      fontWeight: "bold",
      color: "#242B33",
      fontSize: 16,
      flexWrap: "wrap",
    },
    artistName: {
      color: "#242B33",
      fontSize: 14,
      flexWrap: "wrap",
    },
    card: {
      width: "100%",
      height: 51,
      borderRadius: 19,
      marginVertical: 5,
      flexDirection: "row",
      alignItems: "center",
      justifyContent: "space-between",
    },
    cardDark: {
      backgroundColor: "#6D8299",
    },
    cardLight: {
      backgroundColor: "#4B5B6C",
    },
    textContainer: {
      flex: 1,
      marginLeft: 10,
    },
    flatfirst: {
      padding: 15,
    },
    title: {
      fontSize: 15,
      fontWeight: "bold",
    },
    textDark: {
      color: "#242B33",
    },
    textLight: {
      color: "#B4C6D7",
    },
  });
  