import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type TraceListSceneStackParamList = {
  [SCREEN_NAMES.TRACE_LIST]: undefined;
  [SCREEN_NAMES.TRACE_DETAIL]: { id: string };
};

type TraceListSceneStackProps<ScreenName> = NativeStackScreenProps<
  TraceListSceneStackParamList,
  ScreenName
>;
