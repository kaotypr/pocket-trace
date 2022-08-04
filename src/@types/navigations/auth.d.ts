import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type AuthStackParamList = {
  [SCREEN_NAMES.SIGNIN]: undefined;
  [SCREEN_NAMES.SIGNUP]: undefined;
  [SCREEN_NAMES.RESOLVE_AUTH]: undefined;
};

type AuthStackProps<ScreenName> = NativeStackScreenProps<AuthStackParamList, ScreenName>;
