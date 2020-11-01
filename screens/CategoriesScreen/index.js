import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

import { Ionicons } from "@expo/vector-icons";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

/* Data */
import { CATEGORIES } from "../../data/dummyData";

/* Child Components */
import CategoryMealTile from "../../components/CategoryGridTile";
import CustomHeaderButton from "../../components/HeaderButton";

const CategoriesScreen = (props) => {
  const { navigation } = props;

  const renderGridItem = (itemData) => {
    const { item } = itemData;
    return (
      <CategoryMealTile
        title={item.title}
        color={item.color}
        onSelect={() =>
          navigation.navigate({
            routeName: "CategoryMeals",
            params: {
              categoryId: item.id,
            },
          })
        }
      />
    );
  };

  return (
    <FlatList numColumns={2} data={CATEGORIES} renderItem={renderGridItem} />
  );
};

/* Configs */
CategoriesScreen.navigationOptions = ({ navigation }) => {
  return {
    title: "Meal Categories",
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() =>navigation.toggleDrawer()}
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
export default CategoriesScreen;
