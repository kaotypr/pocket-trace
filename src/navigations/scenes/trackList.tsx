import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TraceListSceneStackParamList } from "@@types/navigations/scenes/trackList";
import { TraceDetailScreen, TraceListScreen } from "@screens/TracesScene";
import { SCREEN_NAMES } from "@services/constants/screen";

const TraceListSceneStack = createNativeStackNavigator<TraceListSceneStackParamList>();

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
