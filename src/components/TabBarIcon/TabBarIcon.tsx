import { Entypo } from "@expo/vector-icons";
import React from "react";
import { StyleSheet } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface ITabBarIconProps {
  name?: keyof typeof Entypo.glyphMap;
  focused?: boolean;
  color?: string;
  size?: number;
}

const TabBarIcon = ({ name, focused, color, size }: ITabBarIconProps) => {
  return (
    <Entypo
      name={name}
      size={size}
      color={color}
      style={focused ? styles.active : styles.inactive}
    />
  );
};

const styles = StyleSheet.create({
  active: {
    color: COLOR_LIGHT.PRIMARY,
    fontSize: 22
  },
  inactive: {
    color: COLOR_LIGHT.LIGHT_PRIMARY,
    fontSize: 20
  }
});

export default TabBarIcon;
