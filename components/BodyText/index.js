import React from "react";
import {StyleSheet,Text} from "react-native";
import FONTS from "../../constants/fonts";

const BodyText=(props)=>{
	const {children,style,otherProps}=props;

return <Text style={{...styles.text,...style}} {...otherProps}>{children}</Text>
}

const styles=StyleSheet.create({
	text:{
		fontFamily:FONTS.RalewayRegular,
	}
});


export default BodyText;