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

export default function Favorites() {
  /* useState to register the data loaded from Storage. */
  const [favoritesList, setfavoritesList] = useState([]);

  /*  useEffect will be used when the user get in the favorites screen (so,it just happens once)*/
  useEffect(() => {
    const LoadFavorites = async () => {
      try {
        const data = await AsyncStorage.getItem("@favoritesEdu");
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
        <View style={styles.subContainer}>
          <View style={styles.viewFavorites}>
            <Text style={styles.text}>Favorites...</Text>
          </View>
        </View>
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
});
