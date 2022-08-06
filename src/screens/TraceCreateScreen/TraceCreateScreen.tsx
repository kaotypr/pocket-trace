import React, { useEffect } from "react";
import { View } from "react-native";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { Button } from "@components/Buttons";
import Map from "@components/Map";
import useLocation from "@hooks/useLocation";
import { COLOR_LIGHT } from "@services/constants/color";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceCreateScreen = (_: TracesSceneProps<SCREEN_NAMES.TRACE_CREATE>) => {
  const { isRecording, stopWatching, startWatching, startRecording, stopRecording } = useLocation();

  useEffect(() => {
    startWatching();

    return stopWatching;
  }, []);

  return (
    <>
      <Map showCurrentPoint showActionButtom actionWrapperStyle={{ bottom: 100 }} />
      <View
        style={{
          padding: 20,
          justifyContent: "center",
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0
        }}>
        <Button
          label={isRecording ? "Stop Recording" : "Record"}
          icon={isRecording ? "stop-circle" : "compass"}
          onPress={isRecording ? stopRecording : startRecording}
          buttonStyle={
            isRecording ? { backgroundColor: COLOR_LIGHT.TRANSPARENT_PRIMARY } : undefined
          }
        />
      </View>
    </>
  );
};

export default TraceCreateScreen;
