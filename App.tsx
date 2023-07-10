import React from "react";
import { useFonts } from "expo-font";
import Routes from "./src/screens/routes";
import { extendTheme, NativeBaseProvider } from "native-base";

export default function App() {
  const [fontsLoaded] = useFonts({
    Bernadette: require("./assets/fonts/Bernadette.ttf"),
    EuropaNuovaRegular: require("./assets/fonts/EuropaNuovaRegular.ttf"),
    EuropaNuovaBold: require("./assets/fonts/EuropaNuovaBold.ttf"),
    SairaLight: require("./assets/fonts/Saira-Light.ttf"),
    ScadaBold: require("./assets/fonts/Scada-Bold.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }

  const theme = extendTheme({
    colors: {
      primary: {
        600: "#6db611",
        800: "#5E9F0F",
      },
    },
  });

  return (
    <>
      <NativeBaseProvider theme={theme}>
        <Routes />
      </NativeBaseProvider>
    </>
  );
}
