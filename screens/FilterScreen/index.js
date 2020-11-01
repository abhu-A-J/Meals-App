import React from "react";
import {View,Text,StyleSheet} from "react-native";


const FilterScreen=(props)=>{
	return (
		<View style={styles.screen}>
			<Text>Filter Screen</Text>
		</View>
	)
};

/* Configs */
FilterScreen.navigationOptions={
	title:'Filter Meals'
}


const styles=StyleSheet.create({
	screen:{
		flex:1,
		alignItems:"center",
		justifyContent:"center"
	}
})
export default FilterScreen;