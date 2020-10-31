import React from "react";
import { View, Text, StyleSheet, Button, FlatList } from "react-native";

/* Data */
import { CATEGORIES, MEALS } from "../../data/dummyData";

/* Child Components */
import MealItem from "../../components/MealItem";

const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");
  const displayedMeals = MEALS.filter(
    (meal) => meal.categoryIds.includes(categoryId) === true
  );

  const renderMealItem = (itemData) => {
    const { item } = itemData;
    return (
      <MealItem
        title={item.title}
        duration={item.duration}
        complexity={item.complexity}
        affordability={item.affordability}
        imageUrl={item.imageUrl}
        onSelectMeal={() => {
          navigation.navigate({
            routeName: "MealDetails",
            params: {
              mealId: item.id,
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.screen}>
      <FlatList
        data={displayedMeals}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

/* Configs */
CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});
export default CategoryMealsScreen;
