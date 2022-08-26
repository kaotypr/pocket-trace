import { NavigationProp, useNavigation } from "@react-navigation/native";
import React from "react";
import { Alert, StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { TracesSceneStackParamList } from "@@types/navigations/scenes/traces";
import { ClearButton } from "@components/Buttons";
import { HeadingText } from "@components/Texts";
import { COLOR_LIGHT } from "@services/constants/color";
import { SCREEN_NAMES } from "@services/constants/screen";

interface ITraceListItemProps {
  data: Trace;
  deleteTrace: (id: string) => Promise<any>;
  reloadTraces: () => void;
}

const TraceListItem = ({
  data: { _id = "", name },
  reloadTraces,
  deleteTrace
}: ITraceListItemProps) => {
  const handleDeleteTrace = async () => {
    try {
      await deleteTrace(_id);
      Alert.alert("Success", `Trace ${name} has been deleted`);
      reloadTraces();
    } catch (error) {
      const { message } = error as Error;
      Alert.alert("", message);
    }
  };

  const { navigate } = useNavigation<NavigationProp<TracesSceneStackParamList>>();
  return (
    <View style={styles.wrapper}>
      <ClearButton
        icon="external-link"
        label=""
        iconStyle={{ marginRight: 0 }}
        buttonStyle={{ padding: 0, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <TouchableOpacity onPress={() => navigate(SCREEN_NAMES.TRACE_DETAIL, { id: _id })}>
          <HeadingText type="h3">{name}</HeadingText>
        </TouchableOpacity>
      </View>
      <ClearButton
        icon="delete"
        label=""
        iconStyle={{ marginRight: 0 }}
        buttonStyle={{ padding: 0 }}
        onPress={handleDeleteTrace}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: COLOR_LIGHT.LIGHT_SECONDARY,
    borderRadius: 8,
    padding: 10,
    marginVertical: 5,
    marginHorizontal: 15
  }
});

export default TraceListItem;
