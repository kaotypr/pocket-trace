import { useEffect, useRef, useState } from "react";
import {
  Modal,
  StyleSheet,
  View,
  TouchableWithoutFeedback,
  Alert,
  KeyboardAvoidingView,
  Platform,
  TextInput as RNTextInput
} from "react-native";

import { Button } from "@components/Buttons";
import { TextInput } from "@components/Inputs";
import { HeadingText } from "@components/Texts";
import TraceLine from "@components/TraceLine";
import useTrace from "@hooks/useTrace";
import { COLOR_LIGHT } from "@services/constants/color";

interface ISaveRecordModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  onSaved: () => void;
  records?: any[];
}

const SaveRecordModal = ({
  isVisible,
  records,
  onRequestClose,
  onSaved
}: ISaveRecordModalProps) => {
  const [traceName, setTraceName] = useState<string>("");
  const { saveTrace, discardRecordedTraces, isSaving } = useTrace();
  const refTraceNameInput = useRef<RNTextInput>();

  const handleSave = async () => {
    if (records) {
      try {
        await saveTrace(traceName, records);
        discardRecordedTraces();
        onRequestClose();
        setTraceName("");
        onSaved();
      } catch (error) {
        const { message } = error as Error;
        Alert.alert("", message);
      }
    }
  };

  const haandleDiscard = () => {
    setTraceName("");
    discardRecordedTraces();
    onRequestClose();
  };

  useEffect(() => {
    if (isVisible && refTraceNameInput.current) {
      refTraceNameInput.current.focus();
    }
  }, [isVisible]);

  return (
    <>
      <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onRequestClose}>
        <View style={styles.wrapper}>
          <TouchableWithoutFeedback onPress={onRequestClose}>
            <View style={{ flex: 1 }} />
          </TouchableWithoutFeedback>
          <KeyboardAvoidingView
            style={styles.formCard}
            behavior={Platform.OS === "ios" ? "padding" : "height"}>
            <View style={{ paddingBottom: 30 }}>
              <HeadingText type="h2" style={{ marginBottom: 10 }}>
                Save Recorded Trace
              </HeadingText>
              {records && records.length ? <TraceLine locations={records} /> : null}
              <TextInput
                ref={refTraceNameInput}
                label="Trace Name"
                placeholder="name this recorded trace"
                onChangeText={setTraceName}
                value={traceName}
                editable={!isSaving}
              />
              <View style={styles.buttonWrapper}>
                <Button
                  label="Discard"
                  icon="trash"
                  disabled={isSaving}
                  onPress={haandleDiscard}
                  style={{ flexGrow: 0.8, marginHorizontal: 2 }}
                />
                <Button
                  label="Save"
                  icon="save"
                  disabled={isSaving}
                  onPress={handleSave}
                  style={{ flexGrow: 1, marginHorizontal: 2 }}
                />
              </View>
            </View>
          </KeyboardAvoidingView>
        </View>
      </Modal>
    </>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  formCard: {
    paddingTop: 20,
    paddingBottom: 30,
    paddingHorizontal: 20,
    backgroundColor: COLOR_LIGHT.LIGHT,
    borderRadius: 16,
    borderBottomStartRadius: 0,
    borderBottomEndRadius: 0,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  buttonWrapper: {
    display: "flex",
    flexDirection: "row",
    marginTop: 10
  }
});

export default SaveRecordModal;
