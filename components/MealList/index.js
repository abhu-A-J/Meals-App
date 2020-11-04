import React from "react";
import { StyleSheet, View, FlatList } from "react-native";
import {useSelector} from "react-redux";

/* Child Components*/
import MealItem from "../MealItem";

const MealList = (props) => {
  const { listData,navigation } = props;

  const favoriteMeals=useSelector(state=>state.meals.favoriteMeals);

  const renderMealItem = (itemData) => {
    const { item } = itemData;
    const isFav=favoriteMeals.some(meal=>meal.id===item.id)
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
              mealTitle:item.title,
              isFav
            },
          });
        }}
      />
    );
  };

  return (
    <View style={styles.list}>
      <FlatList
        data={listData}
        renderItem={renderMealItem}
        style={{ width: "100%" }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
});

export default MealList;
