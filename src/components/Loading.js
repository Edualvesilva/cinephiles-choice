import { StyleSheet, View, ActivityIndicator } from "react-native";
import React from "react";

export default function Loading() {
  return (
    <View style={styles.viewLoading}>
      <ActivityIndicator size="large" color="#5451a6" />
    </View>
  );
}

const styles = StyleSheet.create({
  viewLoading: {
    alignItems: "center",
    flex: 1,
    justifyContent: "center",
  },
});
