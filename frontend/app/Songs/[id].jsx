import { useLocalSearchParams } from "expo-router";

const song = [
    {
        id: 1,
        title: "Goldwing",
        artist: "Billie Eilish",
        img: "https://upload.wikimedia.org/wikipedia/pt/e/e8/Happier_Than_Ever_%28%C3%A1lbum%29_-_Billie_Eilish.png",
        backgroundImg:""
    }
]
export default function SongDetail() {
    const { id } = useLocalSearchParams();
    const songs = song.find
}