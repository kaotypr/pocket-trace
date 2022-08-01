import { create } from "react-test-renderer";

import { Button, ClearButton } from "@components/Buttons";

/**
 * @components/Buttons/Button.tsx
 */
describe("components/Buttons/Button", () => {
  it("renders correctly", () => {
    const tree = create(<Button label="Button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("trigger action on press", () => {
    let isPressed = false;
    const buttonRenderer = create(
      <Button
        label="Button"
        onPress={() => {
          isPressed = true;
        }}
      />
    );
    buttonRenderer.root.props?.onPress();
    expect(isPressed).toBeTruthy();
  });
});

/**
 * @components/Buttons/ClearButton.tsx
 */
describe("components/Buttons/ClearButton", () => {
  it("renders correctly", () => {
    const tree = create(<ClearButton label="Clear Button" />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("trigger action on press", () => {
    let isPressed = false;
    const buttonRenderer = create(
      <Button
        label="Button"
        onPress={() => {
          isPressed = true;
        }}
      />
    );
    buttonRenderer.root.props?.onPress();
    expect(isPressed).toBeTruthy();
  });
});
