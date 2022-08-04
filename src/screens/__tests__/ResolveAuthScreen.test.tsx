import AsyncStorage from "@react-native-async-storage/async-storage";
import { create, act } from "react-test-renderer";

import ResolveAuthScreen from "@screens/ResolveAuthScreen";
import withReactNavigationProps from "@screens/__mocks__/withReactNavigationProps";
import { ASYNC_STORAGE_KEYS } from "@services/constants/storage";

describe("screens/ResolveAuthScreen", () => {
  it("should match snapshot", () => {
    const withNavigationProps = withReactNavigationProps(ResolveAuthScreen);
    const result = create(withNavigationProps).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
  it("should get token from async storage", () => {
    const withNavigationProps = withReactNavigationProps(ResolveAuthScreen);
    act(() => {
      create(withNavigationProps);
      expect(AsyncStorage.getItem).toBeCalledWith(ASYNC_STORAGE_KEYS.TOKEN);
    });
  });
});
