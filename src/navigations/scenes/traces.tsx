import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TracesSceneStackParamList } from "@@types/navigations/scenes/traces";
import { TraceDetailScreen, TraceListScreen } from "@screens/TracesScene";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListSceneStack = createNativeStackNavigator<TracesSceneStackParamList>();

const TraceListSceneNavigation = () => {
  return (
    <TraceListSceneStack.Navigator>
      <TraceListSceneStack.Screen
        name={SCREEN_NAMES.TRACE_LIST}
        component={TraceListScreen}
        options={{ headerShown: false }}
      />
      <TraceListSceneStack.Screen name={SCREEN_NAMES.TRACE_DETAIL} component={TraceDetailScreen} />
    </TraceListSceneStack.Navigator>
  );
};

export default TraceListSceneNavigation;
