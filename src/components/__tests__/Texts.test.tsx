import { create } from "react-test-renderer";

import { HeadingText, PressableText } from "@components/Texts";

/**
 * @components/Inputs/TextInput.tsx
 */
describe("components/Texts/HeadingText", () => {
  it("renders correctly", () => {
    const headingTextRenderer = create(<HeadingText type="h1">Heading Text</HeadingText>).toJSON();
    expect(headingTextRenderer).toMatchSnapshot();
  });
});

describe("components/Texts/PressableText", () => {
  it("renders correctly", () => {
    const pressableTextRenderer = create(<PressableText>Pressable Text</PressableText>).toJSON();
    expect(pressableTextRenderer).toMatchSnapshot();
  });

  it("trigger action on press", () => {
    let isPressed = false;
    const pressableTextRenderer = create(
      <PressableText
        onPress={() => {
          isPressed = true;
        }}>
        Pressable Text
      </PressableText>
    );
    const pressableTextInstance = pressableTextRenderer.root;
    pressableTextInstance.props.onPress();
    expect(isPressed).toBeTruthy();
  });
});
