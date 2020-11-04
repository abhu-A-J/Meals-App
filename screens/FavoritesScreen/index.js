import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";
import { useSelector } from "react-redux";

/* Child Components */
import MealList from "../../components/MealList";
import CustomHeaderButton from "../../components/HeaderButton";
import BodyText from "../../components/BodyText";

/* Main Component */
const FavoritesScreen = (props) => {
  const favMeals = useSelector((state) => state.meals.favoriteMeals);
  if (favMeals.length === 0 || !favMeals) {
    return (
      <View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
        <BodyText>No Favorite Meals Found</BodyText>
      </View>
    );
  }

  return <MealList listData={favMeals} navigation={props.navigation} />;
};

/* Configs */
FavoritesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Your Favorites",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() => navigation.toggleDrawer()}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default FavoritesScreen;
