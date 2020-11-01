import React from "react";
import {View,Text,StyleSheet} from "react-native";

/* Child Components */
import MealList from "../../components/MealList";


/* Constants */
import {MEALS } from "../../data/dummyData";

/* Main Component */
const FavoritesScreen=(props)=>{

	const favMeals=MEALS.filter((mealData)=>mealData.id==='m1' || mealData.id==='m2')
	
	return (<MealList listData={favMeals} navigation={props.navigation}/>	)
};

/* Configs */
FavoritesScreen.navigationOptions=({navigation})=>{
	return {
		title:'Your Favorites'
	}
}

const styles=StyleSheet.create({
	screen:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})
export default FavoritesScreen;