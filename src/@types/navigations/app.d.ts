import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type AppStackParamList = {
  [SCREEN_NAMES.TRACES_LIST_SCENE]: undefined;
  [SCREEN_NAMES.TRACE_CREATE]: undefined;
  [SCREEN_NAMES.ACCOUNT]: undefined;
};

type AppStackProps<ScreenName> = NativeStackScreenProps<AppStackParamList, ScreenName>;
