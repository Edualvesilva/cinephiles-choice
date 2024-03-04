import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

export default function Results({ route }) {
  console.log(route.params.text);
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <Text style={styles.text}> You searched for: </Text>
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
