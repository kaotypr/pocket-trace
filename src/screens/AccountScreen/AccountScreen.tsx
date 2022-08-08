import React from "react";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { Button } from "@components/Buttons";
import { HeadingText } from "@components/Texts";
import useAuth from "@hooks/useAuth";
import { SCREEN_NAMES } from "@services/constants/screen";

const AccountScreen = (_: TracesSceneProps<SCREEN_NAMES.ACCOUNT>) => {
  const { signout } = useAuth();

  return (
    <>
      <HeadingText type="h1">AccountScreen</HeadingText>
      <Button label="Sign out" onPress={signout} />
    </>
  );
};

export default AccountScreen;
