import React from "react";
import {useSelector} from "react-redux";

/* Data */
import { CATEGORIES } from "../../data/dummyData";

/* Child Components */
import MealList from "../../components/MealList";
import { View } from "react-native";
import BodyText from "../../components/BodyText";

/* Main Component */
const CategoryMealsScreen = (props) => {
  const { navigation } = props;

  const categoryId = navigation.getParam("categoryId");

  const availableMeals=useSelector(state=>state.meals.filteredMeals)
  
  const displayedMeals = availableMeals.filter(
    (meal) => meal.categoryIds.includes(categoryId) === true
  );

  if(displayedMeals.length==0 || !displayedMeals){
    return (<View style={{flex:1,justifyContent:"center",alignItems:"center"}}>
      <BodyText>There are no meals available</BodyText>
    </View>)
  }

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
