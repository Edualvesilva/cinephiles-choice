// rnfs
import { StyleSheet, Text, View, Image, Pressable } from "react-native";

import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";

export default function CardMovie({ movie }) {
  /* Extracting the movie's information (title and image)   */
  const { title, poster_path } = movie;
  return (
    <View style={styles.styledCard}>
      <Image
        resizeMode="cover"
        style={styles.image}
        source={{ uri: `https://image.tmdb.org/t/p/w500/${poster_path}` }}
      />
      <View style={styles.body}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.buttons}>
          <Pressable style={styles.button}>
            <Text style={styles.ButtonText}>Read More</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.ButtonText}>Save</Text>
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
