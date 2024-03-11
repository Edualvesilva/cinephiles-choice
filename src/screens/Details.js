import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import imagemAlternativa from "../../assets/images/foto-alternativa.jpg";
export default function Details({ route }) {
  const { movie } = route.params;
  const { title, release_date, overview, vote_average, backdrop_path } = movie;

  const FormatData = (release_date) => {
    const parts = release_date.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
  };

  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <ImageBackground
          style={styles.Background}
          source={
            backdrop_path
              ? { uri: `https://image.tmdb.org/t/p/original/${backdrop_path}` }
              : imagemAlternativa
          }
        >
          <Text style={styles.title}>{title}</Text>
        </ImageBackground>
        <View style={styles.Content}>
          <ScrollView showsVerticalScrollIndicator={false}>
            <Text style={[styles.text, styles.Rating]}>
              ⭐ Rating: {vote_average.toFixed(2)}
            </Text>
            <Text style={[styles.text, styles.Release]}>
              📆 Release: {FormatData(release_date)}
            </Text>
            <Text style={[styles.text, styles.Description]}>
              Description: {overview}
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  Background: { height: 200, justifyContent: "center" },
  title: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  Content: {
    padding: 16,
    flex: 1 /* to guarantee the text will occupy the space in case of a big text */,
  },
  text: { paddingVertical: 4, fontSize: 16 },

  Rating: {
    color: "blue",
  },
  Release: { color: "darkblue" },
  Description: { color: "gray" },
});
