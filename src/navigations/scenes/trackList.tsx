import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { TrackListSceneStackParamList } from "@@types/navigations/scenes/trackList";
import { TrackDetailScreen, TrackListScreen } from "@screens/TrackListScene";
import { SCREEN_NAMES } from "@services/constants/screen";

const TrackListSceneStack = createNativeStackNavigator<TrackListSceneStackParamList>();

const TrackListSceneNavigation = () => {
  return (
    <TrackListSceneStack.Navigator>
      <TrackListSceneStack.Screen name={SCREEN_NAMES.TRACK_LIST} component={TrackListScreen} />
      <TrackListSceneStack.Screen name={SCREEN_NAMES.TRACK_DETAIL} component={TrackDetailScreen} />
    </TrackListSceneStack.Navigator>
  );
};

export default TrackListSceneNavigation;
