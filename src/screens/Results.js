import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";

/* prop route 
special prop and defined by the react navigation. and through the prop is possible acess the values of screen navigation. */
export default function Results({ route }) {
  const [results, setResults] = useState([]);

  // Capturing the param that comes from searchMovie
  const { text } = route.params;
  useEffect(() => {
    async function searchMovies() {
      try {
        const answer = await api.get(`search/movie`, {
          params: {
            include_adult: false,
            language: "en-US",
            query: text,
            api_key: apiKey,
          },
        });
        console.log(answer.data.results);
      } catch (error) {
        console.error("Deu ruim: " + error.message);
      }
    }
    searchMovies();
  }, []);
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.text}> You searched for: {text} </Text>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
  },
});
