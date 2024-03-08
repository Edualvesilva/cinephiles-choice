import { StyleSheet, Text, View, Image } from "react-native";
import React from "react";
import Travolta from "../../assets/images/confused-travolta.png";

export default function EmptyList() {
  return (
    <View>
      <Text>Sorry, we couldn't find what you're looking for.</Text>
      <Image source={Travolta} styles={styles.travolta} />
    </View>
  );
}

const styles = StyleSheet.create({
  travolta: {
    objectFit: "contain",
  },
});
