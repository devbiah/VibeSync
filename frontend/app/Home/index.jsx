import { ScrollView, StyleSheet, View } from "react-native";
import { useRouter } from "expo-router";
import NavBar from "../../components/NavBar";
import NavTop from "../../components/NavTop";
import Albuns from "../../components/Albuns";
import Songs from "../../components/Songs";

const albunsData = [
  {
    id: 1,
    imgUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/3/b/8/d/1336191694609198.jpg",
    title: "Guitar Songs",
    artist: "Billie Eilish"
  },
  {
    id: 2,
    imgUrl: "https://upload.wikimedia.org/wikipedia/pt/8/82/Bluesman.jpeg",
    title: "Bluesman",
    artist: "Baco Exu Blues"
  },
  {
    id: 3,
    imgUrl: "https://cdn-images.dzcdn.net/images/cover/bb2880548dd3bc71fb97def2eedec130/500x500.jpg",
    title: "Happier Than Ever",
    artist: "Billie Eilish"
  },
  {
    id: 4,
    imgUrl: "https://m.media-amazon.com/images/I/81mI2S59PzL._UF894,1000_QL80_.jpg",
    title: "Lust for Life",
    artist: "Lana del Rey"
  },
  {
    id: 5,
    imgUrl: "https://is1-ssl.mzstatic.com/image/thumb/Music126/v4/11/7a/b8/117ab805-6811-8929-18b9-0fad7baf0c25/17UMGIM98210.rgb.jpg/600x600bf-60.jpg",
    title: "Evolve",
    artist: "Imagine Dragons"
  },
  {
    id: 6,
    imgUrl: "https://m.media-amazon.com/images/I/81iC+O0ec2L.jpg",
    title: "Hybrid Theory",
    artist: "Linkin Park"
  },
  {
    id: 7,
    imgUrl: "https://upload.wikimedia.org/wikipedia/pt/8/89/Positions_de_Ariana_Grande.png",
    title: "Positions",
    artist: "Ariana Grande"
  },
  {
    id: 8,
    imgUrl: "https://mosaic.scdn.co/300/ab67616d00001e0258c5c044fc7c4b3d540ef600ab67616d00001e025f7fc59ffe1d39cc1e2a2b76ab67616d00001e02b8a4b06e14e6796bb9015ea3ab67616d00001e02cee99dfe5e238701c32bff48",
    title: "Poetas no topo",
    artist: "Todos os poetas no topo"
  },
  {
    id: 9,
    imgUrl: "https://i.scdn.co/image/ab67616d0000b273e8b917e248fdbc970d30f885",
    title: "Homem Torto",
    artist: "Kamaitachi"
  },
];

const songs = [
  {
    id: 1,
    title: "Birds of Feather",
    artist: "Billie Eilish"
  },
  {
    id: 2,
    title: "WILDFLOWER",
    artist: "Billie Eilish"
  },
  {
    id: 3,
    title: "Diamonds",
    artist: "Rihanna"
  },
  {
    id: 4,
    title: "Poetas No Topo 3.3, Pt. 2",
    artist: "Knust, MV Bill, Chris MC, Cesar MC, Pineapple StormTv, Projota, Souto MC, GALI, Black, Dudu"
  },
  {
    id: 5,
    title: "Melhor Só",
    artist: "Baco Exu Blues"
  },
  {
    id: 6,
    title: "With You",
    artist: "Linkin Park"
  },
  {
    id: 7,
    title: "Preciso Conversar",
    artist: "Hiosaki"
  },
  {
    id: 8,
    title: "Chalé em Alaska",
    artist: "Kamaitachi"
  },
  {
    id: 9,
    title: "Amarelo, azul e branco",
    artist: "Anavitória, Rita Lee"
  },
  {
    id: 10,
    title: "Super Shy",
    artist: "New Jeans"
  },
];

const Home = () => {
  const router = useRouter();

  const navigateToDetailsAlbum = (id) => {
    router.push(`/album/${id}`);
  };
  const navigateToDetailsSong = (id) => {
    router.push(`/song/${id}`);
  };
  return (
    <View style={styles.container}>
      <NavTop />
      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        <Albuns albuns={albunsData} onNavigateToDetails={navigateToDetailsAlbum} />
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
