import React, { useEffect, useMemo, useState } from "react";
import { Alert, StyleSheet, View } from "react-native";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { Button } from "@components/Buttons";
import Map from "@components/Map";
import { SuccessModal } from "@components/Modals";
import TraceLine from "@components/TraceLine";
import useLocation from "@hooks/useLocation";
import { COLOR_LIGHT } from "@services/constants/color";
import { ERROR_MESSAGE, SUCCESS_MESSAGE } from "@services/constants/message";
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
  const [isSaving, setIsSaving] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  const buttonLabel = useMemo(() => {
    if (isRecording) {
      return "Stop Recording";
    }
    if (!isRecording && records.length) {
      return "Continue Recording";
    }
    return "Record";
  }, [isRecording, records]);

  const handleStopRecording = () => {
    stopRecording();
    setIsSaving(true);
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
        isVisible={isSaving}
        onRequestClose={() => setIsSaving(false)}
        records={records}
        onSaved={() => setIsSaved(true)}
      />
      <SuccessModal
        isVisible={isSaved}
        onRequestClose={() => setIsSaved(false)}
        message={SUCCESS_MESSAGE.trace_created}
      />
      <Map showCurrentPoint showActionButtom actionWrapperStyle={{ bottom: 130 }}>
        {isRecording || (records && records.length) ? <TraceLine locations={records} /> : null}
      </Map>
      {!error ? (
        <View style={styles.recordButtonWrapper}>
          <Button
            label={buttonLabel}
            icon={isRecording ? "stop-circle" : "compass"}
            onPress={isRecording ? handleStopRecording : startRecording}
            buttonStyle={
              isRecording ? { backgroundColor: COLOR_LIGHT.TRANSPARENT_PRIMARY } : undefined
            }
          />
          {!isRecording && records.length ? (
            <Button label="Save" icon="save" onPress={() => setIsSaving(true)} />
          ) : null}
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
