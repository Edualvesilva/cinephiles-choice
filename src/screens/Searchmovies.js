import SafeContainer from "../components/SafeContainer";
import { StyleSheet, Text, View, TextInput, Button } from "react-native";
import { Ionicons } from "@expo/vector-icons";
export default function Searchmovies() {
  function message() {
    alert("This is a simple alert!");
  }
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
          <Ionicons name="film" size={40} color="#5451a6" style={styles.icon} />
          <TextInput style={styles.input} placeholder="Type your movie!" />
        </View>
        <Button
          onPress={message}
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
  texts: { fontWeight: "bold", marginBottom: 10, paddingLeft: 10 },
  inputArea: { alignItems: "center", flexDirection: "row" },
  icon: {
    marginRight: 10,
  },
  input: {
    height: 40,
    margin: 12,
    width: "80%",
    borderWidth: 1,
    padding: 10,
  },
});
