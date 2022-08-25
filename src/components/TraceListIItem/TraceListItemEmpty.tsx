import { NavigationProp, useNavigation } from "@react-navigation/native";
import { memo } from "react";
import { View } from "react-native";

import { AppStackParamList } from "@@types/navigations/app";
import { Button } from "@components/Buttons";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListItemEmpty = memo(() => {
  const { navigate } = useNavigation<NavigationProp<AppStackParamList>>();
  return (
    <View
      style={{
        flex: 1,
        alignContent: "center",
        justifyContent: "center",
        alignItems: "center",
        marginTop: 200
      }}>
      <HeadingText type="h2">Traces Empty</HeadingText>
      <Button label="Record New Trace" onPress={() => navigate(SCREEN_NAMES.TRACE_CREATE)} />
    </View>
  );
});

export default TraceListItemEmpty;
