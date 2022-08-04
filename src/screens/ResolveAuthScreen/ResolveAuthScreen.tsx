import React, { useEffect } from "react";
import { SafeAreaView, StyleSheet } from "react-native";

import { AuthStackProps } from "@@types/navigations/auth";
import AppIcon from "@components/AppIcon";
import { HeadingText } from "@components/Texts";
import useAuth from "@hooks/useAuth";
import { COLOR_LIGHT } from "@services/constants/color";
import { SCREEN_NAMES } from "@services/constants/screen";
import globalStyles from "@styles/_global";

const ResolveAuthScreen = ({ navigation }: AuthStackProps<SCREEN_NAMES.RESOLVE_AUTH>) => {
  const { resolveAuth } = useAuth();

  useEffect(() => {
    const resolve = async () => {
      const isAuthenticated = await resolveAuth();
      if (!isAuthenticated) {
        navigation.reset({ index: 0, routes: [{ name: SCREEN_NAMES.SIGNIN }] });
      }
    };
    resolve();
  }, []);

  return (
    <SafeAreaView style={[globalStyles.screenView, styles.screenView]}>
      <AppIcon color={COLOR_LIGHT.SECONDARY} />
      <HeadingText type="h1" style={styles.appNameText}>
        Pocket Trace
      </HeadingText>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  screenView: {
    backgroundColor: COLOR_LIGHT.DARK,
    alignItems: "center",
    justifyContent: "center"
  },
  appNameText: {
    color: COLOR_LIGHT.SECONDARY,
    marginTop: 10
  }
});

export default ResolveAuthScreen;
