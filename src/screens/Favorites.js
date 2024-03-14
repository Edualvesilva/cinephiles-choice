import { StyleSheet, Text, View, Pressable, ScrollView } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Favorites() {
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
