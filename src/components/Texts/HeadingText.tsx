import { useMemo } from "react";
import { StyleSheet, Text, TextProps } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface IHeadingTextProps extends TextProps {
  type: "h1" | "h2" | "h3" | "h4";
}

const HeadingText = ({ type, style, children }: IHeadingTextProps) => {
  const textStyle = useMemo(
    () =>
      StyleSheet.flatten([
        styles.default,
        type === "h1" && styles.h1,
        type === "h2" && styles.h2,
        type === "h3" && styles.h3,
        type === "h4" && styles.h4,
        style
      ]),
    [type, style]
  );

  return <Text style={textStyle}>{children}</Text>;
};

const styles = StyleSheet.create({
  default: {
    fontWeight: "bold",
    marginBottom: 3,
    color: COLOR_LIGHT.PRIMARY
  },
  h1: {
    fontSize: 25
  },
  h2: {
    fontSize: 20
  },
  h3: {
    fontSize: 18
  },
  h4: {
    fontSize: 15
  }
});

export default HeadingText;
