import React from "react";

import { TraceListSceneStackProps } from "@@types/navigations/scenes/trackList";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceCreateScreen = ({}: TraceListSceneStackProps<SCREEN_NAMES.TRACE_CREATE>) => {
  return <HeadingText type="h1">TraceCreateScreen</HeadingText>;
};

export default TraceCreateScreen;
