import { create } from "react-test-renderer";

import AppIcon from "@components/AppIcon";

describe("components/AppIcon", () => {
  it("renders correctly", () => {
    const tree = create(<AppIcon />).toJSON();
    expect(tree).toMatchSnapshot();
  });
  it("has mask image & masked view", () => {
    expect.assertions(3);
    const tree: any = create(<AppIcon />).toJSON();
    const hasMaskImage = tree.children[0].children[0].type === "Image";
    const hasMaskedView = tree.children[1].type === "View";
    expect(tree.children.length).toBe(2);
    expect(hasMaskImage).toBeTruthy();
    expect(hasMaskedView).toBeTruthy();
  });
});
