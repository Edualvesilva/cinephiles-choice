import { StatusBar } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Privacy from "./src/screens/Privacy";

// Initialization stack navigation mechanism
const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Home">
          <Stack.Screen
            name="Home"
            component={Home}
            options={{ headerShown: false }}
          />
          <Stack.Screen name="About" component={About} />
          <Stack.Screen name="Privacy" component={Privacy} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
}
