import { StyleSheet, Text, View } from "react-native";
import SafeContainer from "../components/SafeContainer";

/* prop route 
special prop and defined by the react navigation. and through the prop is possible acess the values of screen navigation. */
export default function Results({ route }) {
  // Capturing the param that comes from searchMovie
  const { text } = route.params;
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
