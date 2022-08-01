import MaskedView from "@react-native-masked-view/masked-view";
import { useMemo } from "react";
import { Image, ImageStyle, StyleProp, View } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface IAppIconProps {
  size?: number;
  color?: string;
  style?: StyleProp<ImageStyle>;
}

const AppIcon = ({ size = 50, color = COLOR_LIGHT.PRIMARY, style }: IAppIconProps) => {
  const imageStyle = useMemo(() => {
    const removedBackgroundColor = { ...(style as { [keys: string]: any }) };
    delete removedBackgroundColor.backgroundColor;
    return removedBackgroundColor;
  }, [style]);

  return (
    <MaskedView
      maskElement={
        <Image
          style={[{ width: size, height: size }, imageStyle]}
          source={require("../../assets/images/app-icon.png")}
        />
      }>
      <View style={[{ backgroundColor: color, width: size, height: size }, style]} />
    </MaskedView>
  );
};

export default AppIcon;
