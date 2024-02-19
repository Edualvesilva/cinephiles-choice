import { StatusBar } from "react-native";

import Home from "./src/screens/Home";
import About from "./src/screens/About";
export default function App() {
  return (
    <>
      <StatusBar barStyle="light-content" />
      {/* <Home /> */}
      <About />
    </>
  );
}
