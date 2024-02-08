import {
  Button,
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container}>
        <View style={styles.viewLogo}>
          <Text>Movies</Text>
        </View>
        <View style={styles.viewButtons}>
          <Button title="Search Movies" />
          <Button title="Favorites" />
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
  container: { backgroundColor: "yellow", flex: 1, padding: "auto" },
  viewLogo: {
    backgroundColor: "green",
    flex: 4,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    textAlign: "center",
    alignItems: "center",
    justifyContent: "flex-end",
  },
  viewButtons: {
    backgroundColor: "orange",
    flex: 4,
    justifyContent: "space-evenly",
    flexDirection: "row",
    alignItems: "flex-start",
    marginLeft: "auto",
    marginRight: "auto",
    width: "90%",
  },
  footer: {
    backgroundColor: "red",
    flex: 1,
    width: "90%",
    marginLeft: "auto",
    marginRight: "auto",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
