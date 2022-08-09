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
import { ERROR_MESSAGE } from "@services/constants/message";

interface ISaveRecordModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  records?: any[];
}

const SaveRecordModal = ({ isVisible, records, onRequestClose }: ISaveRecordModalProps) => {
  const [traceName, setTraceName] = useState<string>("");
  const { saveTrace, discardRecordedTraces } = useTrace();
  const refTraceNameInput = useRef<RNTextInput>();

  const handleSave = async () => {
    if (records) {
      try {
        await saveTrace(traceName, records);
      } catch (error) {
        const { message } = error as Error;
        Alert.alert(message, ERROR_MESSAGE.default);
      }
    }
  };

  const haandleDiscard = () => {
    discardRecordedTraces();
    onRequestClose();
  };

  useEffect(() => {
    if (isVisible && refTraceNameInput.current) {
      refTraceNameInput.current.focus();
    }
  }, [isVisible]);

  return (
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
              Recorded Trace
            </HeadingText>
            {records && records.length ? <TraceLine locations={records} /> : null}
            <TextInput
              ref={refTraceNameInput}
              label="Trace Name"
              placeholder="Name this trace record"
              onChangeText={setTraceName}
              value={traceName}
            />
            <View style={styles.buttonWrapper}>
              <Button
                label="Discard"
                icon="trash"
                onPress={haandleDiscard}
                style={{ flexGrow: 1, marginHorizontal: 2 }}
              />
              <Button
                label="Save"
                icon="save"
                onPress={handleSave}
                style={{ flexGrow: 1, marginHorizontal: 2 }}
              />
            </View>
          </View>
        </KeyboardAvoidingView>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  formCard: {
    paddingTop: 15,
    paddingBottom: 30,
    paddingHorizontal: 15,
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
