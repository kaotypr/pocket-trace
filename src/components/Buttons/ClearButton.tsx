import { Feather } from "@expo/vector-icons";
import {
  Pressable,
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacityProps,
  View,
  ViewStyle
} from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface IButtonProps extends TouchableOpacityProps {
  label: string;
  icon?: keyof typeof Feather.glyphMap;
  buttonStyle?: StyleProp<ViewStyle>;
  labelStyle?: StyleProp<TextStyle>;
  iconStyle?: StyleProp<TextStyle>;
}

const ClearButton = ({
  label,
  icon,
  buttonStyle,
  labelStyle,
  iconStyle,
  ...touchableOpacityProps
}: IButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [pressed && styles.wrapper_pressed, styles.wrapper]}
      {...touchableOpacityProps}>
      <View style={[styles.button, buttonStyle]}>
        {icon ? <Feather name={icon} style={[styles.icon, iconStyle]} /> : null}
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5
  },
  wrapper_pressed: {
    backgroundColor: COLOR_LIGHT.SECONDARY,
    borderRadius: 6
  },
  button: {
    padding: 12,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontSize: 18,
    color: COLOR_LIGHT.PRIMARY,
    fontWeight: "500",
    textAlign: "center"
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
    color: COLOR_LIGHT.PRIMARY
  }
});

export default ClearButton;
