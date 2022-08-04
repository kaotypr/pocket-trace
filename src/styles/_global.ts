import { StyleSheet } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

const globalStyles = StyleSheet.create({
  screenView: {
    flex: 1,
    backgroundColor: COLOR_LIGHT.LIGHT,
    position: "relative"
  },
  titleText: {
    fontWeight: "bold",
    fontSize: 30,
    textAlign: "center"
  },
  errorText: {
    fontSize: 14,
    color: "#da0909"
  }
});

export default globalStyles;
