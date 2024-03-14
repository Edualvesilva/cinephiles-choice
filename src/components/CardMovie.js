// rnfs
import {
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
  Alert,
  Vibration,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

/* Hook needed because we aren't in a screen with acess to the prop Navigation */
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";

export default function CardMovie({ movie }) {
  console.log(movie);
  const { title, poster_path } = movie;

  const navigation = useNavigation();

  const save = async () => {
    try {
      /* 1) Verify/load the favorites stored on AsyncStorage. using getItem to analyze if exist an storage with the name provided (@favoritesEdu). Existing, it's loaded to the const favoriteMovies. If it doesn't exist, it'll be created */
      const favoriteMovies = await AsyncStorage.getItem("@favoritesEdu");

      /* 2) Verify/Create a list of favorite's movies (data). if favoriteMovies exist (meaning there's data stored), it will be converted from a string into an object using JSON.parse(). Otherwise, if there is no data stored, favoriteMovies will be initialized as an empty array.  */
      const movieList = favoriteMovies ? JSON.parse(favoriteMovies) : [];

      /* 3) Verify if the movie already exists on the list. We check if there's any movie in the movieList array 
        that matches the ID of the current movie we're considering. 
        If such a movie exists, alreadyHasMovie is set to true.   */
      const alreadyHasMovie = movieList.some((movieOnTheList) => {
        return movieOnTheList.id === movie.id;
      });

      /* 4) if the movie isn't on the list so add it in */

      /* 4.1) if already has a movie, We tell the user  */
      if (movieOnTheList) {
        Alert.alert("Ops!", "You Already saved this movie");
        Vibration.vibrate();
        return;
      }
      /* 4.2) else, we add the movie on the list */
      movieList.push(movie);

      /* 5)  use the AsyncStorage to save in the offline storage of the device  */
      await AsyncStorage.setItem("@favoritesEdu", JSON.stringify(movieList));

      Alert.alert("Favorites", `${title} was saved Sucessfully`);
    } catch (error) {
      console.log("Error: " + error);
      Alert.alert("Error!", "somethin went wrong :(");
    }
  };
  return (
    <View style={styles.styledCard}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={
          poster_path
            ? { uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }
            : imagemAlternativa
        }
      />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
          <Pressable
            style={styles.button}
            onPress={() => navigation.navigate("Details", { movie })}
          >
            <Text style={styles.ButtonText}>
              <Ionicons name="book" size={12} />
              Read More
            </Text>
          </Pressable>

          <Pressable style={styles.button} onPress={save}>
            <Text style={styles.ButtonText}>
              <Ionicons name="add-circle" size={12} />
              Save
            </Text>
          </Pressable>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  styledCard: {
    marginVertical: 4,
    flexDirection: "row",
    borderWidth: 2,
    borderColor: "#5451a6",
    justifyContent: "space-between",
    alignItems: "center",
  },
  image: { height: 150, width: 100, flex: 1 },
  body: { flex: 2 },
  title: {
    backgroundColor: "#5451a6",
    color: "white",
    textAlign: "center",
    paddingVertical: 8,
    fontSize: 16,
  },
  buttons: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    marginTop: 8,
  },
  button: { borderColor: "#5451a6", borderWidth: 1, padding: 8 },
  ButtonText: { color: "#5451a6", fontSize: 12, textTransform: "uppercase" },
});
