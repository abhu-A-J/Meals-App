import React from "react";
import { View, Text, StyleSheet, Button } from "react-native";

/* Data */
import { CATEGORIES } from "../../data/dummyData";



const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return (
    <View style={styles.screen}>
      <Text>Category Meals Screen</Text>
      <Button
        title="Go to meal details"
        onPress={() => navigation.navigate("MealDetails")}
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
