import React from "react";
import {View,Text,StyleSheet,Button} from "react-native";


const CategoriesScreen=(props)=>{
	const {navigation}=props;
	return (
		<View style={styles.screen}>
			<Text>Categories Screen</Text>
			<Button title="go to meals" onPress={()=>navigation.navigate("CategoryMeals")}/>
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
export default CategoriesScreen;