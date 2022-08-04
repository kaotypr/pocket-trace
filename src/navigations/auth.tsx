import { createNativeStackNavigator } from "@react-navigation/native-stack";

import { AuthStackParamList } from "@@types/navigations/auth";
import ResolveAuthScreen from "@screens/ResolveAuthScreen";
import SigninScreen from "@screens/SigninScreen";
import SignupScreen from "@screens/SignupScreen";
import { SCREEN_NAMES } from "@services/constants/screen";

const AuthStack = createNativeStackNavigator<AuthStackParamList>();

const AuthNavigation = () => (
  <AuthStack.Navigator
    initialRouteName={SCREEN_NAMES.RESOLVE_AUTH}
    screenOptions={{ headerShown: false }}>
    <AuthStack.Screen name={SCREEN_NAMES.RESOLVE_AUTH} component={ResolveAuthScreen} />
    <AuthStack.Screen
      name={SCREEN_NAMES.SIGNIN}
      component={SigninScreen}
      options={{ animation: "fade" }}
    />
    <AuthStack.Screen name={SCREEN_NAMES.SIGNUP} component={SignupScreen} />
  </AuthStack.Navigator>
);

export default AuthNavigation;
