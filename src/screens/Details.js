import {
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  View,
} from "react-native";
import SafeContainer from "../components/SafeContainer";
import background from "../../assets/images/foto-alternativa.jpg";
export default function Details() {
  return (
    <SafeContainer>
      <View style={styles.subContainer}>
        <ImageBackground style={styles.Background} source={background}>
          <Text style={styles.title}>Title</Text>
        </ImageBackground>
        <View style={styles.Content}>
          <ScrollView>
            <Text style={[styles.text, styles.Rating]}>Rate...</Text>
            <Text style={[styles.text, styles.Release]}>release...</Text>
            <Text style={[styles.text, styles.Description]}>
              Description...
            </Text>
          </ScrollView>
        </View>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  subContainer: {
    flex: 1,
    width: "100%",
  },
  Background: { height: 200, justifyContent: "center" },
  title: {
    backgroundColor: "rgba(0,0,0,0.75)",
    color: "white",
    fontFamily: "NotoSans",
    textAlign: "center",
    padding: 16,
    fontSize: 16,
    fontWeight: "bold",
  },
  Content: {
    padding: 16,
    flex: 1 /* to guarantee the text will occupy the space in case of a big text */,
  },
  text: { paddingVertical: 4, fontSize: 16 },

  Rating: {
    color: "blue",
  },
  Release: { color: "darkblue" },
  Description: { color: "gray" },
});
