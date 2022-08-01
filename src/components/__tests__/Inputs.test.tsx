import { act, create } from "react-test-renderer";

import { TextInput } from "@components/Inputs";

/**
 * @components/Inputs/TextInput.tsx
 */
describe("components/Inputs/TextInput", () => {
  it("renders correctly", () => {
    const tree = create(<TextInput label="Text Input" />).toJSON();
    expect(tree).toMatchSnapshot();
  });

  it("change value on insert text", () => {
    expect.assertions(2);
    let value = "";
    const inputTextRenderer = create(
      <TextInput label="Button" value={value} onChangeText={(input) => (value = input)} />
    );
    const inputInstance = inputTextRenderer.root.findByType("TextInput" as "input");
    act(() => {
      inputInstance.props?.onChangeText("inserted!");
      inputTextRenderer.update(
        <TextInput label="Button" value={value} onChangeText={(input) => (value = input)} />
      );
    });
    expect(value === "inserted!").toBeTruthy();
    expect(inputInstance.props?.value === value).toBeTruthy();
  });
});
