import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type TracesSceneStackParamList = {
  [SCREEN_NAMES.TRACE_LIST]: undefined;
  [SCREEN_NAMES.TRACE_DETAIL]: { id: string };
};

type TracesSceneProps<ScreenName> = NativeStackScreenProps<TracesSceneStackParamList, ScreenName>;
