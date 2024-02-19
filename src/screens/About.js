import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function About() {
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.subtitle}>About the app Cinephile's Choice</Text>
        <Text style={styles.title}>
          <Text style={styles.appName}>Cinephile's Choice</Text> is an
          application designed to allow users to search for information about
          movies available in the public database provided by The Movie Database
          (TMDb) website.
        </Text>
        <Text style={styles.text}>
          Upon locating a movie, users can view information such as title,
          release date, average rating, and a brief description of the movie,
          and if desired, save this information to a list within the app for
          later viewing.
        </Text>
        <Text style={styles.text}>
          The app may receive new features based on user feedback and demand.
        </Text>
        <Text style={styles.text}>Cinephile's Choice © 2024</Text>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
  subtitle: {
    fontFamily: "NotoSans",
    fontWeight: "bold",
    marginVertical: 8,
    fontSize: 18,
  },
  title: {},
  text: {},
  appName: {
    fontWeight: "bold",
    color: "#5351a6",
  },
});
