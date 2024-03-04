import SafeContainer from "../components/SafeContainer";
import {
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  Vibration,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";
export default function Searchmovies() {
  const [text, setText] = useState("");

  /* Capturing and registering in the state the searched movie  */
  const movieTyped = (valueTyped) => {
    /* valueTyped is an automatic param coming from OnChangeText */
    setText(valueTyped);
  };

  const searchMovie = () => {
    /* if the state is not defined */
    if (!text) {
      Vibration.vibrate(500);
      return Alert.alert("ops!", " You must type the movie!");
    }

    Alert.alert("You searched for: " + text);
  };
  return (
    <SafeContainer>
      <View style={styles.Container}>
        <Text style={styles.texts}>
          Star Trek? The GrandFather? The trilogy of lord of the Rings?
        </Text>
        <Text style={styles.texts}>
          Discover a movie that you've seen before or one that you've never
          seen!
        </Text>

        <View style={styles.inputArea}>
          <Ionicons name="film" size={44} color="#5451a6" style={styles.icon} />
          <TextInput
            style={styles.input}
            placeholder="Type your movie!"
            placeholderTextColor="#5451a6"
            maxLength={30}
            autoFocus
            enterKeyHint="search"
            onSubmitEditing={searchMovie}
            onChangeText={movieTyped}
          />
        </View>
        <Button
          onPress={searchMovie}
          title="Search"
          color="#5451a6"
          accessibilityLabel="a Search button"
        />
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  Container: { flex: 1 },
  texts: {
    marginBottom: 3,
    marginTop: 10,
    paddingLeft: 4,
  },
  inputArea: { flexDirection: "row", justifyContent: "space-between" },

  input: {
    flex: 0.95,
    borderWidth: 1,
    borderColor: "#5451a6",
    padding: 8,
    marginBottom: 10,
  },
});
