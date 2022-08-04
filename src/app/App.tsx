import { StatusBar } from "react-native";
import { SafeAreaProvider } from "react-native-safe-area-context";

import ErrorBoundary from "@components/ErrorBoundary";
import { AuthProvider } from "@contexts/authContext";
import RootNavigation from "@navigations/root";

export default function App() {
  return (
    <ErrorBoundary>
      <AuthProvider>
        <SafeAreaProvider>
          <RootNavigation />
        </SafeAreaProvider>
      </AuthProvider>
      <StatusBar barStyle="dark-content" />
    </ErrorBoundary>
  );
}
