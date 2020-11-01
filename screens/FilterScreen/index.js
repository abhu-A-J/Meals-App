import React, { useState, useEffect, useCallback } from "react";
import { View, Text, StyleSheet, Switch } from "react-native";
import { HeaderButtons, Item } from "react-navigation-header-buttons";
import { Ionicons } from "@expo/vector-icons";

/* Child Components */
import BodyText from "../../components/BodyText";
import CustomHeaderButton from "../../components/HeaderButton";

/* Constants */
import COLORS from "../../constants/colors";
import FONTS from "../../constants/fonts";

/* Main Component */
const FilterScreen = (props) => {
  const { navigation } = props;
  const [isGlutenFree, setIsGlutenFree] = useState(false);
  const [isLactoseFree, setIsLactoseFree] = useState(false);
  const [isVegan, setIsVegan] = useState(false);
  const [isVeg, setIsVeg] = useState(false);

  const saveFilters = useCallback(() => {
    const appliedFilters = {
      isGlutenFree,
      isLactoseFree,
      isVegan,
      isVeg,
    };

    console.log(appliedFilters);
  }, [isGlutenFree, isLactoseFree, isVegan, isVeg]);

  useEffect(() => {
    navigation.setParams({
      saveFilterState: saveFilters,
    });
  }, [saveFilters]);

  return (
    <View style={styles.screen}>
      <BodyText style={styles.title} numberOfLines={2}>
        Available Filter/ Food Restriction Options
      </BodyText>
      <View style={styles.filterContainer}>
        <BodyText style={styles.filterLabel}>Gluten-Free</BodyText>
        <Switch
          value={isGlutenFree}
          onValueChange={(newValue) => setIsGlutenFree(newValue)}
          trackColor={{ false: "#767577", true: COLORS.primaryColor }}
          thumbColor={COLORS.primaryColor}
        />
      </View>

      <View style={styles.filterContainer}>
        <BodyText style={styles.filterLabel}>Lactose</BodyText>
        <Switch
          value={isLactoseFree}
          onValueChange={(newValue) => setIsLactoseFree(newValue)}
          trackColor={{ false: "#767577", true: COLORS.primaryColor }}
          thumbColor={COLORS.primaryColor}
        />
      </View>

      <View style={styles.filterContainer}>
        <BodyText style={styles.filterLabel}>Vegan</BodyText>
        <Switch
          value={isVegan}
          onValueChange={(newValue) => setIsVegan(newValue)}
          trackColor={{ false: "#767577", true: COLORS.primaryColor }}
          thumbColor={COLORS.primaryColor}
        />
      </View>

      <View style={styles.filterContainer}>
        <BodyText style={styles.filterLabel}>Vegeterian</BodyText>
        <Switch
          value={isVeg}
          onValueChange={(newValue) => setIsVeg(newValue)}
          trackColor={{ false: "#767577", true: COLORS.primaryColor }}
          thumbColor={COLORS.primaryColor}
        />
      </View>
    </View>
  );
};

/* Configs */
FilterScreen.navigationOptions = ({ navigation }) => ({
  title: "Filter Meals",
  headerLeft: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Favorites"
        iconName="ios-menu"
        onPress={()=>navigation.toggleDrawer()}
      />
    </HeaderButtons>
  ),
  headerRight: () => (
    <HeaderButtons HeaderButtonComponent={CustomHeaderButton}>
      <Item
        title="Save"
        iconName="ios-save"
        onPress={() => navigation.getParam("saveFilterState")()}
      />
    </HeaderButtons>
  ),
});

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    alignItems: "center",
  },
  title: {
    fontSize: 18,
    color: COLORS.accent,
    textAlign: "center",
    marginVertical: 20,
    fontFamily: FONTS.RalewayBold,
  },
  filterContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    width: "80%",
    borderColor: "#000",
    borderWidth: 1,
    marginVertical: 10,
    padding: 10,
  },
  filterLabel: {
    fontSize: 16,
  },
});
export default FilterScreen;
