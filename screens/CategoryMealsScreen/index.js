import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";


const CategoryMealsScreen=(props)=>{
	const {navigation}=props;
	return (
		<View style={styles.screen}>
			<Text>Category Meals Screen</Text>
			<Button title="Go to meal details" onPress={()=>navigation.navigate("MealDetails")}/>
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
export default CategoryMealsScreen;