import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppStackParamList } from "@@types/navigations/app";
import AccountScreen from "@screens/AccountScreen";
import TrackCreateScreen from "@screens/TrackCreateScreen/TrackCreateScreen";
import { SCREEN_NAMES } from "@services/constants/screen";

import TrackListSceneNavigation from "./scenes/trackList";

const AppStack = createBottomTabNavigator<AppStackParamList>();

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={SCREEN_NAMES.TRACKS_LIST_SCENE}
        component={TrackListSceneNavigation}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="go-kart-track" size={24} color="black" />,
          headerShown: false,
          title: "TrackList"
        }}
      />
      <AppStack.Screen name={SCREEN_NAMES.TRACK_CREATE} component={TrackCreateScreen} />
      <AppStack.Screen name={SCREEN_NAMES.ACCOUNT} component={AccountScreen} />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
