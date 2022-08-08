import { useState } from "react";
import { Modal, StyleSheet, View, TouchableWithoutFeedback, Alert } from "react-native";

import { Button } from "@components/Buttons";
import { TextInput } from "@components/Inputs";
import { HeadingText } from "@components/Texts";
import TraceLine from "@components/TraceLine";
import useTrace from "@hooks/useTrace";
import { ERROR_MESSAGE } from "@services/constants/message";

interface ISaveRecordModalProps {
  isVisible: boolean;
  onRequestClose: () => void;
  records?: any[];
}

const SaveRecordModal = ({ isVisible, records, onRequestClose }: ISaveRecordModalProps) => {
  const [traceName, setTraceName] = useState<string>("");
  const { saveTrace, discardRecordedTraces } = useTrace();

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

  return (
    <Modal animationType="slide" transparent visible={isVisible} onRequestClose={onRequestClose}>
      <View style={styles.wrapper}>
        <TouchableWithoutFeedback onPress={onRequestClose}>
          <View style={{ flex: 1 }} />
        </TouchableWithoutFeedback>
        <View style={styles.formCard}>
          <HeadingText type="h2" style={{ marginBottom: 20 }}>
            Recorded Trace
          </HeadingText>
          {records && records.length ? <TraceLine locations={records} /> : null}
          <TextInput
            label="Trace Name"
            placeholder="Name this trace record"
            onChangeText={setTraceName}
            value={traceName}
          />
          <View
            style={{
              display: "flex",
              flexDirection: "row",
              marginTop: 20
            }}>
            <Button
              label="Discard"
              onPress={haandleDiscard}
              style={{ flexGrow: 0.7, marginRight: 7 }}
            />
            <Button label="Save" onPress={handleSave} style={{ flexGrow: 1, marginLeft: 7 }} />
          </View>
        </View>
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
    height: 400,
    paddingTop: 15,
    paddingHorizontal: 15,
    backgroundColor: "#fff",
    borderRadius: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5
  },
  modalView: {
    margin: 20,
    backgroundColor: "white",
    borderRadius: 20,
    padding: 35,
    alignItems: "center",
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5
  }
});

export default SaveRecordModal;
