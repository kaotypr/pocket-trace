import React from "react";

import { TrackListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TrackListScreen = ({}: TrackListSceneStackProps<SCREEN_NAMES.TRACK_LIST>) => {
  return <HeadingText type="h1">TrackListScreen</HeadingText>;
};

export default TrackListScreen;
