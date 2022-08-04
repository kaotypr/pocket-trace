import type { NativeStackScreenProps } from "@react-navigation/native-stack";

import { SCREEN_NAMES } from "@services/constants/screen";

type TrackListSceneStackParamList = {
  [SCREEN_NAMES.TRACK_LIST]: undefined;
  [SCREEN_NAMES.TRACK_DETAIL]: { id: string };
};

type TrackListSceneStackProps<ScreenName> = NativeStackScreenProps<
  TrackListSceneStackParamList,
  ScreenName
>;
