import { SafeAreaView, StatusBar, Text, TouchableOpacity, View } from "react-native";

import { RootStackProps } from "@@types/navigations/root";
import { Button } from "@components/Buttons";
import useAuth from "@hooks/useAuth";
import { SCREEN_NAMES } from "@services/constants/screen";
import globalStyles from "@styles/_global";

type HomeScreenParamsType = RootStackProps<SCREEN_NAMES.HOME>;

const HomeScreen = ({ navigation }: HomeScreenParamsType) => {
  const { signout } = useAuth();
  return (
    <SafeAreaView
      style={[
        { flex: 1, alignItems: "center", justifyContent: "center" },
        { backgroundColor: "#232323" }
      ]}>
      <StatusBar barStyle="light-content" backgroundColor="#232323" />
      <View style={{ paddingHorizontal: 5 }}>
        <Text style={[globalStyles.titleText, { color: "#919ff0" }]}>Home Screen</Text>
        <TouchableOpacity onPress={() => navigation.navigate(SCREEN_NAMES.ABOUT)}>
          <Text style={{ color: "#eee", textAlign: "center" }}>see about screen ?</Text>
        </TouchableOpacity>
        <Button label="Sign out" onPress={signout} />
      </View>
    </SafeAreaView>
  );
};

export default HomeScreen;
