import React from "react";

import { TrackListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TrackDetailScreen = ({}: TrackListSceneStackProps<SCREEN_NAMES.TRACK_DETAIL>) => {
  return <HeadingText type="h1">TrackDetailScreen</HeadingText>;
};

export default TrackDetailScreen;
