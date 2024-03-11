import { FlatList, StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";
import { api, apiKey } from "../services/api-moviedb";
import { useEffect, useState } from "react";
import CardMovie from "../components/CardMovie";
import Separator from "../components/Separator";
import EmptyList from "../components/EmptyList";
import Loading from "../components/Loading";
/* prop route 
special prop and defined by the react navigation. and through the prop is possible acess the values of screen navigation. */
export default function Results({ route }) {
  const [results, setResults] = useState([]);

  /* State to manage  */
  const [loading, setLoading] = useState(true);

  // Capturing the param that comes from searchMovie
  const { text } = route.params;
  useEffect(() => {
    async function searchMovies() {
      try {
        const answer = await api.get(`/search/movie`, {
          params: {
            include_adult: false,
            language: "en-US",
            query: text,
            api_key: apiKey,
          },
        });
        /* adding the results in the state */
        setResults(answer.data.results);
        setLoading(false);
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

        {loading && <Loading />}

        {!loading && (
          <View style={styles.viewMovies}>
            <FlatList
              /* Prop data pointing out to the state containing the data for FlatList  */
              data={results}
              /* Extracting the key of each item/movie unique */
              keyExtractor={(item) => item.id}
              /* this prop will render each item/movie in a component */
              renderItem={({ item }) => {
                return <CardMovie movie={item} />;
              }}
              ListEmptyComponent={EmptyList}
              ItemSeparatorComponent={Separator}
            />
          </View>
        )}
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  viewMovies: {
    marginVertical: 8,
  },
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },
});
