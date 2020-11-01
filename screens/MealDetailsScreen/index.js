import React from "react";
import { View, Text, StyleSheet, ScrollView, Image } from "react-native";

import { HeaderButtons, Item } from "react-navigation-header-buttons";

/* DATA */
import { MEALS } from "../../data/dummyData";

/* Child Components */
import CustomHeaderButton from "../../components/HeaderButton";
import BodyText from "../../components/BodyText";
import FONTS from "../../constants/fonts";

const ListItem = (props) => {
  return (
    <View style={styles.listItem}>
      <BodyText styles={{ color: "#000" }}>{props.chidren}</BodyText>
    </View>
  );
};

const MealDetailsScreen = (props) => {
  const { navigation } = props;

  const mealId = navigation.getParam("mealId");

  const selectedMeals = MEALS.find((mealData) => mealData.id === mealId);

  return (
    <ScrollView>
      <Image source={{ uri: selectedMeals.imageUrl }} style={styles.image} />

      <View style={styles.details}>
        <BodyText style={styles.text}>
          {selectedMeals.duration} minutes
        </BodyText>
        <BodyText style={styles.text}>{selectedMeals.complexity}</BodyText>
        <BodyText style={styles.text}>{selectedMeals.affordability}</BodyText>
      </View>

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeals.ingredients.map((ingredient, index) => {
        return (
          <View key={ingredient} style={styles.listItem}>
            <BodyText>{ingredient}</BodyText>
          </View>
        );
      })}

      <Text style={styles.title}>Ingredients</Text>
      {selectedMeals.steps.map((step, index) => {
        return (
          <View key={step} style={styles.listItem}>
            <BodyText>{step}</BodyText>
          </View>
        );
      })}
    </ScrollView>
  );
};

/* Configs */
MealDetailsScreen.navigationOptions = ({ navigation }) => {
  const mealID = navigation.getParam("mealId");
  const selectedMeal = MEALS.find((mealItem) => mealItem.id === mealID);
  return {
    title: selectedMeal.title,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
        <Item
          title="Favorites"
          iconName="ios-star"
          onPress={() => console.log("Marked Favorites")}
        />
      </HeaderButtons>
    ),
  };
};

const styles = StyleSheet.create({
  image: {
    width: "90%",
    height: 200,
    marginHorizontal: "5%",
  },
  details: {
    flexDirection: "row",
    justifyContent: "space-around",
    padding: 15,
  },
  title: {
    fontFamily: FONTS.RalewayBold,
    textAlign: "center",
    fontSize: 20,
  },
  text: {
    textTransform: "capitalize",
  },
  listItem: {
    width: "90%",
    marginHorizontal: "5%",
    marginVertical: 15,
    padding: 10,
    borderColor: "#000",
    borderWidth: 1,
  },
});
export default MealDetailsScreen;
