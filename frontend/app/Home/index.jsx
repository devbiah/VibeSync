import { FlatList, StyleSheet, Text, View } from "react-native";
import { useState } from "react";
import NavBar from "../../components/NavBar";
import NavTop from "../../components/NavTop";

// const [tasks, setTasks] = useState([
//   { imgUrl: "https://akamai.sscdn.co/uploadfile/letras/albuns/3/b/8/d/1336191694609198.jpg", title: "Guitar Songs", artist: "Billie Eilish" },
//   { imgUrl: "https://upload.wikimedia.org/wikipedia/pt/8/82/Bluesman.jpeg", title: "Bluesman", artist: "Baco Exu Blues" },
//   { imgUrl: "https://cdn-images.dzcdn.net/images/cover/bb2880548dd3bc71fb97def2eedec130/500x500.jpg", title: "Happier Than Ever", artist: "Billie Eilish" },
//   { imgUrl: "https://m.media-amazon.com/images/I/81mI2S59PzL._UF894,1000_QL80_.jpg", title: "Lust for Life", artist: "Lana del Rey" },
// ]);

const Home = () => {

  return (
    <View style={styles.container}>
      <NavTop />
      <View style={styles.textFlat}>
        <Text style={styles.textPlay}>Recommended Playlist</Text>
        <FlatList>

        </FlatList>
        <Text style={styles.textSong}>Trending Songs</Text>
        <FlatList />
      </View>
      <NavBar />
    </View>
  );
};


// const toggleTaskCompletion = (taskId) => {
//   setTasks((prevTasks) =>
//       prevTasks.map((task) =>
//           task.id === taskId ? { ...task, completed: !task.completed } : task
//       )
// );}
// return (
//   <View style={styles.container}>
//       <Text style={styles.list}>Lista de tarefas</Text>
//       <FlatList
//           data={tasks}
//           renderItem={({ item }) => (
//               <TaskItem task={item} onPress={toggleTaskCompletion} />
//           )}
//           keyExtractor={(item) => item.id}
//       />
//   </View>
// );

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 10,
    backgroundColor: "#B4C6D7",
  },
  imageContainer: {
    marginBottom: 1,
  },
  img: {
    width: 62,
    height: 60,
  },
  textFlat: {
    flex: 1,
    padding: 10,
  },
  textPlay: {
    color: "#242B33",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 15
  },
  textSong: {
    color: "#242B33",
    fontWeight: "bold",
    marginTop: 5,
    fontSize: 15
  }
});

export default Home;
