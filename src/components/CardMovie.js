// rnfs
import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

/* Hook needed because we aren't in a screen with acess to the prop Navigation */
import { useNavigation } from "@react-navigation/native";

export default function CardMovie({ movie }) {
  /* Extracting the movie's information (title and image)   */
  const { title, poster_path } = movie;

  /* Acess to navigation resources */
  const navigation = useNavigation();
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
            onPress={() => navigation.navigate("Details")}
          >
            <Text style={styles.ButtonText}>
              <Ionicons name="book" size={12} />
              Read More
            </Text>
          </Pressable>

          <Pressable style={styles.button}>
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
