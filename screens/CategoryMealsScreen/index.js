import React from "react";
import {useSelector} from "react-redux";

/* Data */
import { CATEGORIES } from "../../data/dummyData";

/* Child Components */
import MealList from "../../components/MealList";

/* Main Component */
const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const availableMeals=useSelector(state=>state.meals.filteredMeals)
  
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.includes(categoryId) === true
  );

  return <MealList listData={displayedMeals} navigation={navigation} />;
};

/* Configs */
CategoryMealsScreen.navigationOptions = ({ navigation }) => {
  const categoryId = navigation.getParam("categoryId");
  const selectedCategory = CATEGORIES.find((item) => item.id === categoryId);

  return {
    title: selectedCategory.title,
  };
};

export default CategoryMealsScreen;
