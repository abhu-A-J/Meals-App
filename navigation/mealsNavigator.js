import React from "react";
import { View, Text, TouchableNativeFeedbackComponent } from "react-native";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";
import { createBottomTabNavigator } from "react-navigation-tabs";
import { createDrawerNavigator } from "react-navigation-drawer";
import { Ionicons } from "@expo/vector-icons";

/* Constants */
import COLORS from "../constants/colors";

/* Screens */
import CategoriesScreen from "../screens/CategoriesScreen";
import CategoryMealsScreen from "../screens/CategoryMealsScreen";
import MealDetailsScreen from "../screens/MealDetailsScreen";
import FavoritesScreen from "../screens/FavoritesScreen";
import FilterScreen from "../screens/FilterScreen";
import FONTS from "../constants/fonts";

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
      headerTitleStyle:{
        fontFamily:FONTS.RalewayBold,
      }
    },
  }
);

/* Stack Navigator for Favorites Screen */
const FavoritesScreenStackNavigator = createStackNavigator(
  {
    Favorites: FavoritesScreen,
    MealDetails: MealDetailsScreen,
  },
  {
    defaultNavigationOptions: {
      headerTintColor: COLORS.primaryColor,
      headerTitleStyle:{
        fontFamily:FONTS.RalewayBold
      }
    },
  }
);

/* Tab Navigtor */
const MealsTabNavigator = createBottomTabNavigator(
  {
    Meals: {
      screen: AppNavigator,
      navigationOptions: {
        tabBarIcon: (tabIconOptions) => {
          return (
            <Ionicons
              name="ios-restaurant"
              size={25}
              color={tabIconOptions.tintColor}
            />
          );
        },
      },
    },
    Favorites: {
      screen: FavoritesScreenStackNavigator,
      navigationOptions: {
        tabBarIcon: (tabIconOptions) => {
          return (
            <Ionicons
              name="ios-star"
              size={25}
              color={tabIconOptions.tintColor}
            />
          );
        },
      },
    },
  },
  {
    tabBarOptions: {
      activeTintColor: COLORS.accent,
      inactiveTintColor: "grey",
      labelStyle: {
        fontFamily:FONTS.RalewayBold,
        fontSize:15
      },
      style:{
        height:60
      }
    },
    
  }
);

/* Filter Screen Stack Navigator */
const FilterScreenStackNavigator = createStackNavigator({
  Filters: FilterScreen,
});

/* Main Navigation Options */
const MainNavigator = createDrawerNavigator(
  {
    MealsFavorites: {
      screen: MealsTabNavigator,
      navigationOptions: {
        title: "Meals Categories",
      },
    },
    Filters: FilterScreenStackNavigator,
  },
  {
    contentOptions:{
      activeTintColor :COLORS.accent,
      labelStyle:{
        fontFamily:FONTS.RalewayRegular,
        fontSize:18
      },
      activeLabelStyle :{
        fontFamily:FONTS.RalewayRegular,
      }
    }
  }
);

export default createAppContainer(MainNavigator);
