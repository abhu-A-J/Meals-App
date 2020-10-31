import React from "react";
import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TouchableOpacity,
} from "react-native";

/* Data */
import { CATEGORIES } from "../../data/dummyData";

/* Child Components */
import CategoryMealTile from "../../components/CategoryGridTile";

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
CategoriesScreen.navigationOptions = {
  title: "Meal Categories",
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CategoriesScreen;
