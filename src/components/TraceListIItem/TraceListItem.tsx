import React from "react";
import { StyleSheet, View } from "react-native";
import { TouchableOpacity } from "react-native-gesture-handler";

import { ClearButton } from "@components/Buttons";
import { HeadingText } from "@components/Texts";
import { COLOR_LIGHT } from "@services/constants/color";

interface ITraceListItemProps {
  data: Trace;
}

const TraceListItem = ({ data }: ITraceListItemProps) => {
  return (
    <View style={styles.wrapper}>
      <ClearButton
        icon="external-link"
        label=""
        iconStyle={{ marginRight: 0 }}
        buttonStyle={{ padding: 0, marginRight: 10 }}
      />
      <View style={{ flex: 1 }}>
        <TouchableOpacity>
          <HeadingText type="h3">{data.name}</HeadingText>
        </TouchableOpacity>
      </View>
      <ClearButton
        icon="delete"
        label=""
        iconStyle={{ marginRight: 0 }}
        buttonStyle={{ padding: 0 }}
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
