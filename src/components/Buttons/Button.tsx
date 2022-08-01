import { Feather } from "@expo/vector-icons";
import {
  StyleProp,
  StyleSheet,
  Text,
  TextStyle,
  TouchableOpacity,
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

const Button = ({
  label,
  icon,
  buttonStyle,
  labelStyle,
  iconStyle,
  ...touchableOpacityProps
}: IButtonProps) => {
  return (
    <TouchableOpacity style={styles.wrapper} {...touchableOpacityProps}>
      <View style={[styles.button, buttonStyle]}>
        {icon ? <Feather name={icon} style={[styles.icon, iconStyle]} /> : null}
        <Text style={[styles.label, labelStyle]}>{label}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    marginVertical: 5
  },
  button: {
    padding: 12,
    backgroundColor: COLOR_LIGHT.PRIMARY,
    borderRadius: 6,
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center"
  },
  label: {
    fontSize: 18,
    color: COLOR_LIGHT.LIGHT,
    fontWeight: "500",
    textAlign: "center"
  },
  icon: {
    marginRight: 10,
    fontSize: 18,
    color: COLOR_LIGHT.LIGHT
  }
});

export default Button;
