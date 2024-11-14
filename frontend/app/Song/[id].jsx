import { useLocalSearchParams } from "expo-router";
import { Image, StyleSheet, Text, View } from "react-native";
import MusicNav from "../../components/MusicNav";

const song = [
  {
    id: 1,
    title: "Goldwing",
    artist: "Billie Eilish",
    img: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png",
    backgroundImg: require("../../assets/videos/GOLDWING.gif"),
    song: require("../../assets/music/goldwing.mp3"),
  },
];

export default function SongDetail() {
  const { id } = useLocalSearchParams();
  const songs = song.find((s) => s.id === Number(id));

  if (!songs) {
    return (
      <View style={styles.container}>
        <MusicNav />
        <Text style={styles.errorText}>Music not found.</Text>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Image source={songs.backgroundImg} style={styles.background} />
      <MusicNav />
      <View style={styles.songContainer}>
        <Image source={{ uri: songs.img }} style={styles.image} />
        <View style={styles.textContainer}>
          <Text style={styles.artist}>{songs.artist}</Text>
          <Text style={styles.title} numberOfLines={1}>
            {songs.title.length > 10 ? `${songs.title.substring(0, 10)}...` : songs.title}
          </Text>
        </View>
        <View style={styles.iconContainer}>
          <Image source={require("../../assets/svg/share.svg")} style={styles.icon} />
          <Image source={require("../../assets/svg/plus.svg")} style={styles.icon} />
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
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
    zIndex: -1, // Position the background image behind all content
  },
  songContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderRadius: 17,
    borderWidth: 1,
    borderColor: '#E9F0F6',
    backgroundColor: '#E9F0F6',
    padding: 10,
    margin: 20,
    height: 217,
    width: 359,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 0,
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
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 10,
  },
  icon: {
    width: 41,
    height: 41,
    marginLeft: 10,
  },
  errorText: {
    textAlign: 'center',
    marginTop: 20,
  },
});
