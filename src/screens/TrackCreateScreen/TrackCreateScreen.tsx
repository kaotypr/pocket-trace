import React from "react";

import { TrackListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TrackCreateScreen = ({}: TrackListSceneStackProps<SCREEN_NAMES.TRACK_CREATE>) => {
  return <HeadingText type="h1">TrackCreateScreen</HeadingText>;
};

export default TrackCreateScreen;
