import { StyleSheet, View } from "react-native";

import { MaterialCommunityIcons } from "@expo/vector-icons";

export default function Separator() {
  return (
    <View style={styles.ViewSeparator}>
      <MaterialCommunityIcons name="movie-roll" size={12} color={"#5451a6"} />
      <MaterialCommunityIcons name="movie-roll" size={12} color={"#5451a6"} />
      <MaterialCommunityIcons name="movie-roll" size={12} color={"#5451a6"} />
    </View>
  );
}

const styles = StyleSheet.create({
  ViewSeparator: {
    marginVertical: 8,
    flexDirection: "row",
    justifyContent: "space-evenly",
    opacity: 0.5,
  },
});
