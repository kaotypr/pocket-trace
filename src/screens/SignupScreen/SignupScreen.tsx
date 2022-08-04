import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthStackProps } from "@@types/navigations/auth";
import { Button } from "@components/Buttons";
import BackHeaders from "@components/Headers/BackHeaders";
import TextInput from "@components/Inputs/TextInput";
import HeadingText from "@components/Texts/HeadingText";
import useAuth from "@hooks/useAuth";
import { SCREEN_NAMES } from "@services/constants/screen";
import globalStyles from "@styles/_global";

const SignupScreen = ({ navigation }: AuthStackProps<SCREEN_NAMES.SIGNIN>) => {
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoading, signup, error } = useAuth();

  const onSubmit = () => {
    signup(name, email, password);
  };

  return (
    <SafeAreaView style={globalStyles.screenView}>
      <BackHeaders navigation={navigation} />
      <View style={styles.container}>
        <View>
          <HeadingText type="h2" style={{ marginBottom: 10 }}>
            Sign Up
          </HeadingText>
          <TextInput label="Name" value={name} onChangeText={setName} clearable />
          <TextInput
            label="Email"
            autoComplete="email"
            value={email}
            onChangeText={setEmail}
            clearable
          />
          <TextInput
            label="Password"
            autoComplete="password"
            secureTextEntry
            value={password}
            defaultValue={password}
            onChangeText={setPassword}
          />
          {error ? <Text style={globalStyles.errorText}>{error?.message}</Text> : null}
          <Button
            disabled={isLoading}
            label="Sign Up"
            icon="user-plus"
            labelStyle={{ fontWeight: "bold" }}
            onPress={onSubmit}
          />
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 30,
    marginTop: 30
  },
  contentHead: {
    alignItems: "center",
    marginBottom: 30
  },
  otherAuthOptions: {
    alignItems: "center"
  },
  otherAuthOptionText: {
    fontWeight: "bold",
    marginVertical: 10
  }
});

export default SignupScreen;
