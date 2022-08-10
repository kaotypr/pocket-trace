import { Feather } from "@expo/vector-icons";
import { forwardRef, useState } from "react";
import {
  StyleSheet,
  Text,
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  TouchableOpacity,
  View
} from "react-native";

import { COLOR_LIGHT } from "@services/constants/color";

interface ITextInputProps extends Omit<RNTextInputProps, "style"> {
  label?: string;
  clearable?: boolean;
}

const TextInput = forwardRef(
  (
    {
      value = "",
      onChangeText,
      label,
      clearable,
      secureTextEntry = false,
      ...inputProps
    }: ITextInputProps,
    ref: any
  ) => {
    const [isFocus, setIsFocus] = useState<boolean>(false);
    const [isSecureText, setIsSecureText] = useState<boolean>(secureTextEntry);

    const clear = () => {
      if (onChangeText) {
        onChangeText("");
      }
    };

    const toggleSecureText = () => {
      setIsSecureText((prevIsSecureText) => !prevIsSecureText);
    };

    const toggleFocus = () => {
      setIsFocus((prevIsFocus) => !prevIsFocus);
    };

    return (
      <View style={styles.field}>
        {label ? <Text style={styles.label}>{label}</Text> : null}
        <View
          style={StyleSheet.flatten([styles.inputWrapper, isFocus && styles.inputWrapper_focus])}>
          <RNTextInput
            ref={ref}
            autoCorrect={false}
            autoCapitalize="none"
            placeholder={label}
            onFocus={toggleFocus}
            onBlur={toggleFocus}
            onChangeText={onChangeText}
            secureTextEntry={isSecureText}
            value={value}
            {...inputProps}
            style={styles.input}
            placeholderTextColor={COLOR_LIGHT.TRANSPARENT_PRIMARY}
          />
          {clearable && value && !secureTextEntry ? (
            <TouchableOpacity style={styles.iconWrapper} onPress={clear}>
              <Feather style={styles.icon} name="x-circle" />
            </TouchableOpacity>
          ) : null}
          {value && secureTextEntry ? (
            <View style={styles.iconWrapper}>
              <TouchableOpacity onPress={toggleSecureText}>
                <Feather style={styles.icon} name={isSecureText ? "eye" : "eye-off"} />
              </TouchableOpacity>
            </View>
          ) : null}
        </View>
      </View>
    );
  }
);

const styles = StyleSheet.create({
  field: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "flex-start",
    width: "100%",
    marginVertical: 10
  },
  label: {
    fontSize: 16,
    textAlign: "left",
    fontWeight: "500"
  },
  inputWrapper: {
    width: "100%",
    borderColor: COLOR_LIGHT.PRIMARY,
    borderRadius: 6,
    backgroundColor: COLOR_LIGHT.SECONDARY,
    display: "flex",
    flexDirection: "row"
  },
  inputWrapper_focus: {
    backgroundColor: COLOR_LIGHT.LIGHT_SECONDARY
  },
  input: {
    fontSize: 16,
    flexDirection: "row",
    width: "90%",
    paddingVertical: 14,
    paddingHorizontal: 10
  },
  iconWrapper: {
    display: "flex",
    flex: 1,
    flexDirection: "row",
    justifyContent: "center",
    alignItems: "center"
  },
  icon: {
    color: COLOR_LIGHT.PRIMARY,
    fontSize: 20
  }
});

export default TextInput;
