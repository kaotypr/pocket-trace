import React from "react";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListScreen = (_: TracesSceneProps<SCREEN_NAMES.TRACE_LIST>) => {
  return <HeadingText type="h1">TraceListScreen</HeadingText>;
};

export default TraceListScreen;
