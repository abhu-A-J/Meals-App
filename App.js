import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {AppLoading} from "expo";
import {useFonts} from "expo-font";
import { enableScreens } from 'react-native-screens';

/* Navigators*/
import MealsNavigator from "./navigation/mealsNavigator";


enableScreens();

const App=()=> {

  const [isFontsLoading]=useFonts({
    'RalewayRegular':require("./assets/fonts/Raleway-Regular.ttf"),
    'RalewayBold':require("./assets/fonts/Raleway-SemiBold.ttf")
  });

  if(!isFontsLoading){
    return <AppLoading/>
  }

  return (
   <MealsNavigator/>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;