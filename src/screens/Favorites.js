import {
  StyleSheet,
  Text,
  View,
  Pressable,
  ScrollView,
  Alert,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import { useEffect, useState } from "react";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { Ionicons } from "@expo/vector-icons";

export default function Favorites({ navigation }) {
  /* useState to register the data loaded from Storage. */
  const [favoritesList, setfavoritesList] = useState([]);

  /*  useEffect will be used when the user get in the favorites screen (so,it just happens once)*/
  useEffect(() => {
    const LoadFavorites = async () => {
      try {
        /* Acessing the created storage before and saving the data's strings */
        const data = await AsyncStorage.getItem("@favoritesEdu");

        /* If there's data, turn it into a object (JSON.parse) and update the state with a favoritesList */
        if (data) {
          setfavoritesList(JSON.parse(data));
        }
      } catch (error) {
        console.error("Error to load the data: " + error);
        Alert.alert("Error", "Something went wrong ");
      }
    };
    LoadFavorites();
  }, []);
  // log on State
  console.log(favoritesList);
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <View style={styles.viewFavorites}>
          <Text style={styles.text}>
            Quantity of Favorites: {favoritesList.length}
          </Text>

          <Pressable style={styles.button}>
            <Text style={styles.DeleteFavorites}>
              <Ionicons name="trash-outline" size={16} /> Delete Favorites
            </Text>
          </Pressable>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {favoritesList.map((movie) => {
            return (
              <View key={movie.id} style={styles.item}>
                <Pressable
                  onPress={() => {
                    navigation.navigate("Details", { movie });
                  }}
                  style={styles.MovieButton}
                >
                  <Text style={styles.title}>{movie.title}</Text>
                </Pressable>
                <Pressable style={styles.deleteButton}>
                  <Ionicons color="white" name="trash" size={16} />
                </Pressable>
              </View>
            );
          })}
        </ScrollView>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    padding: 16,
    width: "100%",
  },

  text: {
    marginVertical: 8,
  },

  viewFavorites: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 8,
  },
  button: {
    borderWidth: 1,
    borderColor: "red",
    padding: 8,
    borderRadius: 4,
  },

  DeleteFavorites: {
    color: "red",
  },
  item: {
    padding: 8,
    flexDirection: "row",
    justifyContent: "space-between",
    backgroundColor: "#eee8fc",
    marginBottom: 8,
    borderRadius: 4,
    alignItems: "center",
  },
  title: {
    fontSize: 14,
  },
  MovieButton: {
    flex: 1,
  },
  deleteButton: {
    backgroundColor: "darkred",
    padding: 8,
    borderRadius: 4,
  },
});
