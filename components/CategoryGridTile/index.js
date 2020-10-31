import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";

/* Constants */
import FONTS from "../../constants/fonts";

/* Main Component */
const CategoryGridTile = (props) => {
  const { title, onSelect, color } = props;
  return (
    <TouchableOpacity
      activeOpacity={0.7}
      style={{ ...styles.gridItem, backgroundColor: color }}
      onPress={onSelect}
    >
      <View>
        <Text numberOfLines={2} style={styles.text}>
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  gridItem: {
    flex: 1,
    margin: 15,
    height: 150,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 10,
    elevation: 15,
    padding: 10,
  },
  text: {
    color: "#000",
    fontSize: 18,
    fontFamily: FONTS.RalewayBold,
    textTransform: "uppercase",
  },
});

export default CategoryGridTile;
