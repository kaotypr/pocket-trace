import { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

import { AuthStackProps } from "@@types/navigations/auth";
import AppIcon from "@components/AppIcon";
import { Button } from "@components/Buttons";
import TextInput from "@components/Inputs/TextInput";
import { PressableText } from "@components/Texts";
import HeadingText from "@components/Texts/HeadingText";
import useAuth from "@hooks/useAuth";
import { SCREEN_NAMES } from "@services/constants/screen";
import globalStyles from "@styles/_global";

const SigninScreen = ({ navigation }: AuthStackProps<SCREEN_NAMES.SIGNIN>) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const { isLoading, signin, error } = useAuth();

  const onSubmit = () => {
    signin(email, password);
  };

  return (
    <SafeAreaView style={globalStyles.screenView}>
      <View style={styles.container}>
        <View style={styles.contentHead}>
          <AppIcon />
          <HeadingText type="h1">Pocket Trace</HeadingText>
        </View>
        <View>
          <HeadingText type="h2" style={{ marginBottom: 10 }}>
            Sign In
          </HeadingText>
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
          {error ? <Text style={globalStyles.errorText}>{error.message}</Text> : null}
          <Button
            label="Sign In"
            icon="user-check"
            labelStyle={{ fontWeight: "bold" }}
            disabled={isLoading}
            onPress={onSubmit}
          />
          <View style={styles.otherAuthOptions}>
            <PressableText style={styles.otherAuthOptionText}>Forgot Password ?</PressableText>
            <Text>or</Text>
            <PressableText
              style={styles.otherAuthOptionText}
              onPress={() => navigation.navigate(SCREEN_NAMES.SIGNUP)}>
              Create Account
            </PressableText>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    display: "flex",
    paddingHorizontal: 20,
    paddingVertical: 30
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

export default SigninScreen;
