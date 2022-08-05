import React from "react";

import { TraceListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListScreen = ({}: TraceListSceneStackProps<SCREEN_NAMES.TRACE_LIST>) => {
  return <HeadingText type="h1">TraceListScreen</HeadingText>;
};

export default TraceListScreen;
