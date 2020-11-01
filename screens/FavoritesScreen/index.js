import React from "react";
import {View,Text,StyleSheet} from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";


/* Child Components */
import MealList from "../../components/MealList";
import CustomHeaderButton from "../../components/HeaderButton";


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
		title:'Your Favorites',
		headerLeft:()=>(
			<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-menu"
          onPress={() =>navigation.toggleDrawer()}
        />
      </HeaderButtons>
		)
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