import { StatusBar } from "expo-status-bar";
import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { AppLoading } from "expo";
import { useFonts } from "expo-font";
import { enableScreens } from "react-native-screens";
import { Provider } from "react-redux";


/* Store */
import store from "./store";
/* Navigators*/
import MealsNavigator from "./navigation/mealsNavigator";

enableScreens();

const App = () => {
  const [isFontsLoading] = useFonts({
    RalewayRegular: require("./assets/fonts/Raleway-Regular.ttf"),
    RalewayBold: require("./assets/fonts/Raleway-SemiBold.ttf"),
  });

  if (!isFontsLoading) {
    return <AppLoading />;
  }

  return (
    <Provider store={store}>
      <MealsNavigator />
    </Provider>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});

export default App;
