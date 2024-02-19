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
import { Ionicons } from "@expo/vector-icons";
import { useFonts } from "expo-font";
import * as SplashScreen from "expo-splash-screen";
import { useCallback } from "react";

/* Manter a tela splash visível enquanto não programarmos a ação de ocultar */
SplashScreen.preventAutoHideAsync();
export default function App() {
  const [fontsLoaded, fontError] = useFonts({
    "Monoton-Regular": require("./assets/fonts/Monoton-Regular.ttf"),
    NotoSans: require("./assets/fonts/NotoSans-VariableFont.ttf"),
  });

  /* Função atrelada ao Hook callback.
  Quando uma função está conectada ao useCallback, garantimos que a referência dela é armazenada na memória somente uma vez. */
  const onLayoutRootView = useCallback(async () => {
    /* Se estiver tudo ok com o carregamento */
    if (fontsLoaded || fontError) {
      /* Escondemos o splashScreen */
      await SplashScreen.hideAsync();
    }
  }, [fontsLoaded, fontError]);

  if (!fontsLoaded && !fontError) {
    return null;
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={styles.container} onLayout={onLayoutRootView}>
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
              <Ionicons name="lock-closed" size={16} color="white" />
            </Text>
          </Pressable>

          <Pressable style={styles.footerButtons}>
            <Text style={styles.buttonText}>
              <Ionicons name="lock-closed" size={16} color="white" />
            </Text>
          </Pressable>
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
    backgroundColor: "red",
    flex: 1,
    width: "80%",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
});
