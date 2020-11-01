import React from "react";
import {View,Text,StyleSheet} from "react-native";

import {HeaderButtons,Item} from "react-navigation-header-buttons";

/* DATA */
import {MEALS} from "../../data/dummyData";

/* Child Components */
import CustomHeaderButton from "../../components/HeaderButton";

const MealDetailsScreen=(props)=>{
	
	const {navigation}=props;

	return (
		<View style={styles.screen}>
			<Text>Categories Screen</Text>
		</View>
	)
};

/* Configs */
MealDetailsScreen.navigationOptions=({navigation})=>{
	const mealID=navigation.getParam('mealId');
	const selectedMeal=MEALS.find((mealItem)=>mealItem.id===mealID);
	return {
		title:selectedMeal.title,
		headerRight:()=>(
				<HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
					<Item title="Favorites" iconName="ios-star" onPress={()=>console.log('Marked Favorites')}/>
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
export default MealDetailsScreen;