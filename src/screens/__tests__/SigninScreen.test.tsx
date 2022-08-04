import { create, act } from "react-test-renderer";

import SigninScreen from "@screens/SigninScreen";
import withReactNavigationProps from "@screens/__mocks__/withReactNavigationProps";

describe("screens/SigninScreen", () => {
  it("should match snapshot", () => {
    const withNavigationProps = withReactNavigationProps(SigninScreen);
    const result = create(withNavigationProps).toJSON();
    act(() => {
      expect(result).toMatchSnapshot();
    });
  });
});
