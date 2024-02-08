import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
  Image,
  Pressable,
} from "react-native";

import logo from "./assets/images/logo.png";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.viewLogo}>
          <Image source={logo} style={styles.logo} />
          <Text>Cinephile's Choice</Text>
        </View>
        <View style={styles.viewButtons}>
          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Search Movies</Text>
          </Pressable>

          <Pressable style={styles.button}>
            <Text style={styles.buttonText}>Favorites</Text>
          </Pressable>
        </View>
        <View style={styles.footer}>
          <Button title="Privacy" />
          <Button title="About" />
        </View>
      </SafeAreaView>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  viewLogo: {
    flex: 4,
    width: "80%",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  button: {
    borderStyle: "solid",
    borderWidth: 2,
    padding: 16,
    backgroundColor: "#5451a6",
  },
  buttonText: { color: "#fff" },

  logo: { width: 128, height: 128 },

  viewButtons: {
    flex: 4,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-start",
    width: "80%",
  },
  footer: {
    backgroundColor: "red",
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
