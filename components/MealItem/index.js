import React from "react";
import {
  View,
  StyleSheet,
  Text,
  TouchableOpacity,
  ImageBackground,
} from "react-native";

/* Constants */
import FONTS from "../../constants/fonts";


/* Child Components */
import BodyText from "../../components/BodyText";

const MealItem = (props) => {
  const {
    title,
    onSelectMeal,
    duration,
    complexity,
    affordability,
    imageUrl,
  } = props;

  return (
    <View style={styles.mealItem}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={onSelectMeal}
      >
        <View>
          <View style={{ ...styles.mealRow, ...styles.mealHeader }}>
            <ImageBackground
              source={{ uri: imageUrl }}
              style={styles.imageBackground}
            >
              <Text style={styles.title} numberOfLines={2}>
                {title}
              </Text>
            </ImageBackground>
          </View>
          <View style={{ ...styles.mealRow, ...styles.mealDescription }}>
            <BodyText style={styles.text}>{duration} minutes</BodyText>
            <BodyText style={styles.text}>{complexity}</BodyText>
            <BodyText style={styles.text}>{affordability}</BodyText>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mealItem: {
    height: 200,
    width: "90%",
    marginVertical: 20,
    marginHorizontal: "5%",
  },
  mealRow: {
    flexDirection: "row",
    backgroundColor: "#f3f3f3",
  },
  mealHeader: {
    height: "80%",
  },
  imageBackground: {
    width: "100%",
    height: "100%",
    justifyContent: "center",
  },
  title: {
    fontFamily: FONTS.RalewayBold,
    fontSize: 22,
    color: "#fff",
    backgroundColor: "rgba(0,0,0,0.5)",
    paddingVertical: 5,
    paddingHorizontal: 12,
    textAlign: "center",
  },
  mealDescription: {
    justifyContent: "space-between",
    paddingHorizontal: 15,
    paddingVertical: 5,
    height: "20%",
  },
  text:{
  }
});

export default MealItem;
