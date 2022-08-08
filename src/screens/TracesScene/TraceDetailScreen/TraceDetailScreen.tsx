import React from "react";

import { TracesSceneProps } from "@@types/navigations/scenes/traces";
import { HeadingText } from "@components/Texts";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceDetailScreen = (_: TracesSceneProps<SCREEN_NAMES.TRACE_DETAIL>) => {
  return <HeadingText type="h1">TraceDetailScreen</HeadingText>;
};

export default TraceDetailScreen;
