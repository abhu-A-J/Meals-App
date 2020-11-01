import React from "react";
import {HeaderButton} from "react-navigation-header-buttons";
import {Ionicons} from "@expo/vector-icons";

/* Constants */
import COLORS from "../../constants/colors";

/* Main Component*/
const CustomHeaderButton = (props) => (
  <HeaderButton IconComponent={Ionicons} iconSize={23} color={COLORS.primaryColor} {...props} />
);

export default CustomHeaderButton;