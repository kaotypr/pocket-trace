import React from "react";

import { TraceListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceDetailScreen = ({}: TraceListSceneStackProps<SCREEN_NAMES.TRACE_DETAIL>) => {
  return <HeadingText type="h1">TraceDetailScreen</HeadingText>;
};

export default TraceDetailScreen;
