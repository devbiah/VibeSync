import {
    Text,
    StyleSheet,
    View,
    Image,
    FlatList,
    Pressable,
  } from "react-native";
  import { Ionicons } from "@expo/vector-icons";
  import { useEffect, useState } from "react";
  import { router, useLocalSearchParams } from "expo-router";
  import NavArt from "../../components/NavArt";
  
  export default function ArtistDetail() {
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
          if (!artistResponse.ok) {
            throw new Error(
              `Erro ao buscar o artista: ${artistResponse.statusText}`
            );
          }
  
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
          style={styles.flatfirst}
          data={albuns}
          keyExtractor={(item) => item.id.toString()}
          horizontal
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
                  style={styles.image}
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
                  styles.title,
                  index % 2 === 0 ? styles.textDark : styles.textLight,
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.title}
              </Text>
              <Text
                style={[
                  styles.artist,
                  index % 2 === 0 ? styles.textDark : styles.textLight,
                ]}
                numberOfLines={1}
                ellipsizeMode="tail"
              >
                {item.Artist.name}
              </Text>
            </Pressable>
          )}
          showsHorizontalScrollIndicator={false}
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
      marginTop: 100,
      marginLeft: 20,
    },
    play: {
      width: 30,
      height: 30,
      marginTop: 10,
    },
    artistContainer: {
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      borderRadius: 20,
      padding: 10,
      height: 179,
      width: 332,
      alignSelf: "center",
    },
    coverImage: {
      width: 150,
      height: 150,
      borderRadius: 100,
      marginBottom: 20,
    },
    textContainer: {
      flexDirection: "column",
      justifyContent: "center",
      flexWrap: "wrap",
      width: "55%",
    },
    artistName: {
      fontWeight: "bold",
      color: "#242B33",
      fontSize: 16,
      flexWrap: "wrap",
      textAlign: "center",
    },
    artistBio: {
      color: "#242B33",
      fontSize: 14,
      flexWrap: "wrap",
      textAlign: "center",
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
  