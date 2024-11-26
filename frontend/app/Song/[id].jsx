import { useLocalSearchParams, useRouter } from "expo-router";
import { Image, Pressable, StyleSheet, Text, View } from "react-native";
import MusicNav from "../../components/MusicNav";
import NavBar from "../../components/NavBar";
import React, { useState, useEffect } from 'react';
import { Audio } from 'expo-av';

export default function SongDetail() {
  const { id } = useLocalSearchParams();
  const router = useRouter();

  const [song, setSong] = useState(null);
  const [songs, setSongs] = useState([]);  
  const [isPlaying, setIsPlaying] = useState(false);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [sound, setSound] = useState();

  useEffect(() => {
    const fetchSongs = async () => {
      try {
        const response = await fetch("http://localhost:8000/artist/songs");
        if (!response.ok) {
          throw new Error('Songs not found');
        }
        const songsData = await response.json();
        setSongs(songsData); 
      } catch (error) {
        setError(error.message);
      }
    };

    fetchSongs();
  }, []);

  useEffect(() => {
    const fetchSong = async () => {
      if (!id) return;
      try {
        const response = await fetch(`http://localhost:8000/artist/songs/${id}`);
        if (!response.ok) {
          throw new Error('Song not found');
        }
        const songData = await response.json();
        setSong(songData);
      } catch (error) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchSong();
  }, [id]);

  const togglePlayPause = async () => {
    if (isPlaying) {
      await sound.stopAsync();
    } else {
      const { sound: playbackObject } = await Audio.Sound.createAsync(
        { uri: song.songUrl }, 
        { shouldPlay: true }
      );
      setSound(playbackObject);
    }
    setIsPlaying(!isPlaying); 
  };

  const goToNextSong = () => {
    const currentIndex = songs.findIndex((songItem) => songItem.id === Number(id));
    const nextSong = songs[(currentIndex + 1) % songs.length]; 
    router.push(`/Song/${nextSong.id}`);
  };

  const goToPreviousSong = () => {
    const currentIndex = songs.findIndex((songItem) => songItem.id === Number(id));
    const prevSong = songs[(currentIndex - 1 + songs.length) % songs.length];
    router.push(`/Song/${prevSong.id}`);
  };

  if (loading) {
    return (
      <View style={styles.container}>
        <MusicNav />
        <Text style={styles.errorText}>Loading...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={styles.container}>
        <MusicNav />
        <Text style={styles.errorText}>{error}</Text>
      </View>
    );
  }

  if (!song) {
    return (
      <View style={styles.container}>
        <MusicNav />
        <Text style={styles.errorText}>Music not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={{ uri: song.gif }} style={styles.background} />
      <MusicNav />
      <View style={styles.songContainer}>
        <View style={styles.songDetails}>
          <Image source={{ uri: song.fileUrl }} style={styles.image} />
          <View style={styles.textContainer}>
            <Text style={styles.artist}>{song.artist}</Text>
            <Text style={styles.title} numberOfLines={1}>
              {song?.songTitle?.length > 10 ? `${song.songTitle.substring(0, 10)}...` : song?.songTitle || 'indisponível'}
            </Text>
          </View>
          <View style={styles.iconContainer}>
            <Image source={require("../../assets/svg/share.svg")} style={styles.icon} />
            <Image source={require("../../assets/svg/plus.svg")} style={styles.icon} />
          </View>
        </View>
        <View style={styles.playerContainer}>
          <View style={styles.player}>
            <Pressable onPress={goToPreviousSong}>
              <Image source={require("../../assets/svg/skipback.svg")} style={styles.iconP} />
            </Pressable>
            <Pressable onPress={togglePlayPause}>
              <Image
                source={isPlaying ? require("../../assets/svg/loading.svg") : require("../../assets/svg/player.svg")}
                style={styles.iconP}
              />
            </Pressable>
            <Pressable onPress={goToNextSong}>
              <Image source={require("../../assets/svg/skipforward.svg")} style={styles.iconP} />
            </Pressable>
          </View>
        </View>
      </View>
      <NavBar style={styles.navBar} />
    </View>
  );
}

const styles = StyleSheet.create({
  navBar: {
    position: "absolute",
    left: 0,
    right: 0,
    bottom: 0,
    zIndex: 1,
    height: 60,
    backgroundColor: "#4B5B6C",
  },
  container: {
    flex: 1,
    backgroundColor: "#E9F0F6",
  },
  background: {
    width: '100%',
    height: '100%',
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: -1,
    opacity: '85%'
  },
  songContainer: {
    flexDirection: 'column',
    alignItems: 'center',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#E9F0F6',
    backgroundColor: '#E9F0F6',
    padding: 10,
    margin: 100,
    height: 167,
    width: 339,
    position: 'absolute',
    alignSelf: 'center',
    bottom: 10,
  },
  songDetails: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 57,
    height: 57,
    borderRadius: 10,
  },
  textContainer: {
    marginLeft: 10,
    flex: 1,
  },
  artist: {
    color: '#6D8299',
    fontSize: 16,
  },
  title: {
    color: '#242B33',
    fontSize: 26,
    fontWeight: 'bold'
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    width: 41,
    height: 41,
    marginLeft: 5,
  },
  iconP: {
    width: 55,
    height: 55,
    marginLeft: 10,
  },
  playerContainer: {
    width: '100%',
    alignItems: "center",
    marginTop: 20,
  },
  player: {
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
