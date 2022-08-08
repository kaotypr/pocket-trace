import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { AppStackParamList } from "@@types/navigations/app";
import TabBarIcon from "@components/TabBarIcon";
import TabBarLabel from "@components/TabBarLabel";
import { LocationProvider } from "@contexts/locationContext";
import AccountScreen from "@screens/AccountScreen";
import TraceCreateScreen from "@screens/TraceCreateScreen";
import { CUSTOM_HEADER_TITLE, SCREEN_NAMES } from "@services/constants/screen";

import TraceListSceneNavigation from "./scenes/traces";

const AppStack = createBottomTabNavigator<AppStackParamList>();

const AppNavigation = () => {
  return (
    <LocationProvider>
      <AppStack.Navigator>
        <AppStack.Screen
          name={SCREEN_NAMES.TRACES_LIST_SCENE}
          component={TraceListSceneNavigation}
          options={{
            headerTitle: CUSTOM_HEADER_TITLE.TRACES,
            tabBarIcon: (tabBarProps) => <TabBarIcon name="layers" {...tabBarProps} />,
            tabBarLabel: (tabBarProps) => (
              <TabBarLabel label={CUSTOM_HEADER_TITLE.TRACES} {...tabBarProps} />
            )
          }}
        />
        <AppStack.Screen
          name={SCREEN_NAMES.TRACE_CREATE}
          component={TraceCreateScreen}
          options={{
            headerShown: false,
            tabBarIcon: (tabBarProps) => <TabBarIcon name="vinyl" {...tabBarProps} />,
            tabBarLabel: (tabBarProps) => (
              <TabBarLabel label={CUSTOM_HEADER_TITLE.TRACE_CREATE} {...tabBarProps} />
            )
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
    </LocationProvider>
  );
};

export default AppNavigation;
