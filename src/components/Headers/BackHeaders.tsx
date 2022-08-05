import { Feather } from "@expo/vector-icons";
import { NativeStackHeaderProps } from "@react-navigation/native-stack";
import { TouchableOpacity, View } from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

const BackHeaders = ({ navigation }: Pick<NativeStackHeaderProps, "navigation">) => {
  if (!navigation.canGoBack()) {
    return null;
  }

  return (
    <View style={{ zIndex: 1 }}>
      <TouchableOpacity
        onPress={() => navigation.goBack()}
        style={{ position: "absolute", top: 10, left: 20 }}>
        <Feather name="arrow-left-circle" color={COLOR_LIGHT.PRIMARY} size={35} />
      </TouchableOpacity>
    </View>
  );
};

export default BackHeaders;
