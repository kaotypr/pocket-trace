import React from "react";
import { StyleSheet, Text } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface ITabBarLabel {
  label?: string;
  focused?: boolean;
  color?: string;
  position?: any;
}

const TabBarLabel = ({ label, focused }: ITabBarLabel) => {
  return <Text style={focused ? styles.active : styles.inactive}>{label}</Text>;
};

const styles = StyleSheet.create({
  active: {
    color: COLOR_LIGHT.PRIMARY,
    fontSize: 12,
    fontWeight: "bold"
  },
  inactive: {
    color: COLOR_LIGHT.LIGHT_PRIMARY,
    fontSize: 12
  }
});

export default TabBarLabel;
