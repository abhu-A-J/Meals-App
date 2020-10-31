import React from "react";
import {View,Text,StyleSheet} from "react-native";

/* DATA */
import {MEALS} from "../../data/dummyData";

const MealDetailsScreen=(props)=>{
	
	const {navigation}=props;
	const mealID=navigation.getParam('mealId');
	console.log(mealID);
	return (
		<View style={styles.screen}>
			<Text>Categories Screen</Text>
		</View>
	)
};


const styles=StyleSheet.create({
	screen:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})
export default MealDetailsScreen;