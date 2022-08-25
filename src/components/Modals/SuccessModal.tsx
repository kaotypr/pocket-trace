import { Feather } from "@expo/vector-icons";
import React from "react";
import { Modal, ModalProps, StyleSheet, Text, TouchableOpacity, View } from "react-native";

import Divider from "@components/Divider";
import { HeadingText } from "@components/Texts";
import { COLOR_LIGHT } from "@services/constants/color";

interface ISuccessModalProps extends ModalProps {
  isVisible: boolean;
  message?: JSX.Element | string;
}

const SuccessModal = ({ isVisible, message, onRequestClose }: ISuccessModalProps) => {
  return (
    <Modal animationType="fade" transparent visible={isVisible} onRequestClose={onRequestClose}>
      <View style={styles.wrapper}>
        <View style={styles.modalCard}>
          <View style={styles.header}>
            <Feather name="check-circle" style={styles.headerIcon} />
            <HeadingText type="h2" style={{ color: COLOR_LIGHT.PRIMARY }}>
              Success
            </HeadingText>
            <TouchableOpacity onPress={onRequestClose} style={styles.closeWrapper}>
              <Feather name="x" style={styles.headerIcon} />
            </TouchableOpacity>
          </View>
          <Divider />
          <View>
            <Text>{message}</Text>
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    alignItems: "center",
    display: "flex",
    justifyContent: "center",
    backgroundColor: "rgba(0, 0, 0, 0.2)"
  },
  modalCard: {
    width: 250,
    height: 120,
    borderRadius: 8,
    padding: 10,
    display: "flex",
    backgroundColor: COLOR_LIGHT.LIGHT,
    shadowColor: COLOR_LIGHT.DARK,
    shadowOffset: {
      width: 0,
      height: -1
    },
    shadowOpacity: 0.3,
    shadowRadius: 10,
    elevation: 5,
    marginTop: -200
  },
  header: {
    width: "100%",
    height: 25,
    display: "flex",
    flexWrap: "wrap",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  headerIcon: {
    fontSize: 20,
    color: COLOR_LIGHT.PRIMARY,
    fontWeight: "bold",
    marginRight: 5
  },
  closeWrapper: {
    width: 24,
    height: 24,
    position: "absolute",
    right: 0
  }
});

export default SuccessModal;
