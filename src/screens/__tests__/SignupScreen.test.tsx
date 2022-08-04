import { create, act } from "react-test-renderer";

import SignupScreen from "@screens/SignupScreen";
import withReactNavigationProps from "@screens/__mocks__/withReactNavigationProps";

describe("screens/SignupScreen", () => {
  it("should match snapshot", () => {
    const withNavigationProps = withReactNavigationProps(SignupScreen);
    const result = create(withNavigationProps).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
