import { useState, useEffect } from "react";
import { ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import NavBar from "../../components/NavBar";
import NavTop from "../../components/NavTop";
import Albuns from "../../components/Albuns";
import Songs from "../../components/Songs";


const Home = () => {
  const router = useRouter();
  const [albuns, setAlbuns] = useState([]);
  const [songs, setSongs] = useState([]);


  const fetchAlbuns = async () => {
    try {
      const response = await fetch("http://localhost:8000/artist/allAlbums");
      const data = await response.json();
      setAlbuns(data);
    } catch (error) {
      console.error("Erro ao buscar álbuns:", error);
    }
  };


  const fetchSongs = async () => {
    try {
      const response = await fetch("http://localhost:8000/artist/songs");
      const data = await response.json();
      setSongs(data);
    } catch (error) {
      console.error("Erro ao buscar músicas:", error);
    }
  };

  useEffect(() => {
    fetchAlbuns();
    fetchSongs();
  }, []);
  const navigateToDetailsAlbum = (id) => {
    router.push(`/Album/${id}`);
  };


  const navigateToDetailsSong = (id) => {
    router.push(`/Song/${id}`);
  };


  return (
    <View style={styles.container}>
      <NavTop />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Albuns albuns={albuns} onNavigateToDetails={navigateToDetailsAlbum} />
        <Songs songs={songs} onNavigateToDetails={navigateToDetailsSong} />
      </ScrollView>
      <NavBar style={styles.navBar} />
    </View>
  );
};


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B4C6D7"
  },
  scrollContent: {
    paddingBottom: 10
  },
  navBar: {
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0,
    height: 60,
    backgroundColor: "#4B5B6C"
  },
});


export default Home;



