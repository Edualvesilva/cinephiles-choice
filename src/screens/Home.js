import { StyleSheet, Text, View, Image, Pressable } from "react-native";
import SafeContainer from "../components/SafeContainer";
import logo from "../../assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";

export default function Home() {
  return (
    <SafeContainer>
      <View style={styles.viewLogo}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>Cinephile's</Text>
        <Text style={styles.title}>Choice</Text>
      </View>

      <View style={styles.viewButtons}>
        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            <Ionicons name="search" size={16} color="white" />
            Search Movies
          </Text>
        </Pressable>

        <Pressable style={styles.button}>
          <Text style={styles.buttonText}>
            <Ionicons name="star" size={16} color="gold" />
            Favorites
          </Text>
        </Pressable>
      </View>
      <View style={styles.footer}>
        <Pressable style={styles.footerButtons}>
          <Text style={styles.buttonText}>
            <Ionicons name="lock-closed" size={16} color="white" /> Privacy
          </Text>
        </Pressable>

        <Pressable style={styles.footerButtons}>
          <Text style={styles.buttonText}>
            <Ionicons name="information-circle" size={16} color="white" /> About
          </Text>
        </Pressable>
      </View>
    </SafeContainer>
  );
}

const styles = StyleSheet.create({
  viewLogo: {
    flex: 4,
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    padding: 16,
    backgroundColor: "#5451a6",
  },
  buttonText: {
    color: "#fff",
    fontFamily: "NotoSans",
    fontWeight: "bold",
    fontSize: 16,
  },

  logo: { width: 128, height: 128 },

  title: {
    fontFamily: "Monoton-Regular",
    fontSize: 36,
    color: "#5a51a6",
  },
  viewButtons: {
    flex: 4,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
  },
  footer: {
    backgroundColor: "#5451a6",
    flex: 1,
    width: "100%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  footerButtons: {
    padding: 16,
  },
});
