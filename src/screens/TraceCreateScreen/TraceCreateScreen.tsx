import React, { useEffect, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { Button } from "@components/Buttons";
import Map from "@components/Map";
import TraceLine from "@components/TraceLine";
import useLocation from "@hooks/useLocation";
import { COLOR_LIGHT } from "@services/constants/color";
import { ERROR_MESSAGE } from "@services/constants/message";
import { SCREEN_NAMES } from "@services/constants/screen";

import SaveRecordModal from "./components/SaveRecordModal";

const TraceCreateScreen = (_: TracesSceneProps<SCREEN_NAMES.TRACE_CREATE>) => {
  const {
    error,
    records = [],
    isRecording,
    stopWatching,
    startWatching,
    startRecording,
    stopRecording
  } = useLocation();
  const [isVisible, setIsVisible] = useState<boolean>(false);

  const handleStopRecording = () => {
    stopRecording();
    setIsVisible(true);
  };

  useEffect(() => {
    startWatching();

    return stopWatching;
  }, []);

  useEffect(() => {
    if (error) {
      Alert.alert(error.message, ERROR_MESSAGE.unathorized_location);
    }
  }, [error]);

  return (
    <>
      <SaveRecordModal
        isVisible={isVisible}
        onRequestClose={() => setIsVisible(false)}
        records={records}
      />
      <Map showCurrentPoint showActionButtom actionWrapperStyle={{ bottom: 100 }}>
        {isRecording || (records && records.length) ? <TraceLine locations={records} /> : null}
      </Map>
      {!error ? (
        <View style={styles.recordButtonWrapper}>
          <Button
            label={isRecording ? "Stop Recording" : "Record"}
            icon={isRecording ? "stop-circle" : "compass"}
            onPress={isRecording ? handleStopRecording : startRecording}
            buttonStyle={
              isRecording ? { backgroundColor: COLOR_LIGHT.TRANSPARENT_PRIMARY } : undefined
            }
          />
        </View>
      ) : null}
    </>
  );
};

const styles = StyleSheet.create({
  recordButtonWrapper: {
    padding: 20,
    justifyContent: "center",
    position: "absolute",
    bottom: 0,
    left: 0,
    right: 0
  }
});

export default TraceCreateScreen;
