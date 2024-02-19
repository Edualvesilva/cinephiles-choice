import { StatusBar } from "react-native";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Privacy from "./src/screens/Privacy";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Home /> */}
      {/* <About /> */}
      <Privacy />
    </>
  );
}
