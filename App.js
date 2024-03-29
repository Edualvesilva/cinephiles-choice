import { Button, StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Privacy from "./src/screens/Privacy";
import Searchmovies from "./src/screens/Searchmovies";
import Results from "./src/screens/Results";
import Details from "./src/screens/Details";
import Favorites from "./src/screens/Favorites";
// Initialization stack navigation mechanism
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator
          initialRouteName="Home"
          screenOptions={{
            headerStyle: { backgroundColor: "#5451a6" },
            headerTintColor: "white",
          }}
        >
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen
            name="About"
            component={About}
            options={{ title: "Discover our app" }}
          />

          <Stack.Screen name="Privacy" component={Privacy} />
          <Stack.Screen
            name="Searchmovies"
            component={Searchmovies}
            options={{ title: "Find Your Movie" }}
          />
          <Stack.Screen name="Results" component={Results} />
          <Stack.Screen
            name="Details"
            component={Details}
            options={({ navigation }) => {
              return {
                headerRight: () => (
                  <Button
                    color="black"
                    title="Home"
                    onPress={() => navigation.navigate("Home")}
                  />
                ),
              };
            }}
          />
          <Stack.Screen name="Favorites" component={Favorites} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
