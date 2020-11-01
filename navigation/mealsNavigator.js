import React from "react";
import { View, Text, TouchableNativeFeedbackComponent } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Ionicons} from "@expo/vector-icons"

/* Constants */
import COLORS from "../constants/colors";

/* Screens */
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";


/* Stack Navigator */
const AppNavigator = createStackNavigator(
  {
    Categories: CategoriesScreen,
    CategoryMeals: {
      screen: CategoryMealsScreen,
    },
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: COLORS.primaryColor,
    },
  }
);


/* Stack Navigator for Favorites Screen */
const FavoritesScreenStackNavigator=createStackNavigator(
  {
    Favorites:FavoritesScreen,
    MealDetails:MealDetailsScreen
  },
  {
    defaultNavigationOptions: {
      headerTintColor: COLORS.primaryColor,
    },
  }
)


/* Tab Navigtor */
const MealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen :AppNavigator,
      navigationOptions:{
        tabBarIcon:(tabIconOptions)=>{
          return <Ionicons name="ios-restaurant" size={25} color={tabIconOptions.tintColor}/>
        }
      }
    },
    Favorites: {
      screen:FavoritesScreenStackNavigator,
      navigationOptions:{
        tabBarIcon:(tabIconOptions)=>{
          return <Ionicons name="ios-star" size={25} color={tabIconOptions.tintColor}/>
        }
      }
    },
  },
  { 
    tabBarOptions: {
      activeTintColor: COLORS.accent,
      inactiveTintColor:'grey',
    },

  }
);


export default createAppContainer(MealsTabNavigator);
