import { LocationObject } from "expo-location";
import React from "react";
import { Circle } from "react-native-maps";

import { COLOR_LIGHT } from "@services/constants/color";

interface ICurrentLocationIndicatorProps {
  currentPoint?: LocationObject;
  radius?: number;
}

const CurrentLocationIndicator = ({
  currentPoint,
  radius = 15
}: ICurrentLocationIndicatorProps) => {
  if (!currentPoint) {
    return null;
  }
  return (
    <Circle
      center={currentPoint.coords}
      radius={radius}
      strokeColor={COLOR_LIGHT.PRIMARY}
      fillColor={COLOR_LIGHT.TRANSPARENT_SECONDARY}
    />
  );
};

export default CurrentLocationIndicator;
