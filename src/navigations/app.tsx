import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppStackParamList } from "@@types/navigations/app";
import TabBarIcon from "@components/TabBarIcon";
import TabBarLabel from "@components/TabBarLabel";
import AccountScreen from "@screens/AccountScreen";
import TraceCreateScreen from "@screens/TraceCreateScreen/TraceCreateScreen";
import { SCREEN_NAMES } from "@services/constants/screen";

import TraceListSceneNavigation from "./scenes/trackList";

const AppStack = createBottomTabNavigator<AppStackParamList>();

const AppNavigation = () => {
  return (
    <AppStack.Navigator>
      <AppStack.Screen
        name={SCREEN_NAMES.TRACES_LIST_SCENE}
        component={TraceListSceneNavigation}
        options={{
          headerTitle: "Traces",
          tabBarIcon: (tabBarProps) => <TabBarIcon name="layers" {...tabBarProps} />,
          tabBarLabel: (tabBarProps) => <TabBarLabel label="Traces" {...tabBarProps} />
        }}
      />
      <AppStack.Screen
        name={SCREEN_NAMES.TRACE_CREATE}
        component={TraceCreateScreen}
        options={{
          tabBarIcon: (tabBarProps) => <TabBarIcon name="vinyl" {...tabBarProps} />,
          tabBarLabel: (tabBarProps) => <TabBarLabel label="Record" {...tabBarProps} />
        }}
      />
      <AppStack.Screen
        name={SCREEN_NAMES.ACCOUNT}
        component={AccountScreen}
        options={{
          tabBarIcon: (tabBarProps) => <TabBarIcon name="info-with-circle" {...tabBarProps} />,
          tabBarLabel: (tabBarProps) => (
            <TabBarLabel label={SCREEN_NAMES.ACCOUNT} {...tabBarProps} />
          )
        }}
      />
    </AppStack.Navigator>
  );
};

export default AppNavigation;
