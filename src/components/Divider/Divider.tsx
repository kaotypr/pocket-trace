import React from "react";
import { View } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

const Divider = () => {
  return (
    <View
      style={{
        width: "100%",
        marginTop: 5,
        marginBottom: 5,
        height: 1.5,
        backgroundColor: COLOR_LIGHT.TRANSPARENT_PRIMARY
      }}
    />
  );
};

export default Divider;
