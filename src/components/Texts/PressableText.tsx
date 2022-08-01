import {
  Text,
  TouchableOpacityProps,
  TouchableOpacity,
  StyleSheet,
  StyleProp,
  TextStyle
} from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface IPressableTextProps extends TouchableOpacityProps {
  children: JSX.Element | string;
  style?: StyleProp<TextStyle>;
  wrapperStyle?: StyleProp<TextStyle>;
}

const PressableText = ({
  children,
  style,
  wrapperStyle,
  ...touchableOpacityProps
}: IPressableTextProps) => {
  return (
    <TouchableOpacity {...touchableOpacityProps} style={wrapperStyle}>
      <Text style={[styles.text, style]}>{children}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  text: {
    color: COLOR_LIGHT.PRIMARY
  }
});

export default PressableText;
