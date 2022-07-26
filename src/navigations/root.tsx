import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { RootStackParamList } from "@@types/navigations/root";
import Fallback from "@components/Fallback";
import { useAuthContext } from "@contexts/authContext";
import { SCREEN_NAMES } from "@services/constants/screen";

import AppNavigation from "./app";
import AuthNavigation from "./auth";

const Stack = createNativeStackNavigator<RootStackParamList>();

const RootNavigation = () => {
  const { authState } = useAuthContext();

  return (
    <NavigationContainer fallback={<Fallback />}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {authState.isSignedIn ? (
          <Stack.Screen
            name={SCREEN_NAMES.APP_SCENE}
            component={AppNavigation}
            options={{ animation: "slide_from_bottom" }}
          />
        ) : (
          <Stack.Screen
            name={SCREEN_NAMES.AUTH_SCENE}
            component={AuthNavigation}
            options={{ animation: "fade" }}
          />
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default RootNavigation;
