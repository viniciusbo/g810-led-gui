import assert from "assert";
import KeyboardConfig from "./KeyboardConfig";

describe("KeyboardConfig Entity", () => {
  it("should instantiate", () => {
    const kc = new KeyboardConfig({
      model: "g810",
      config: {
        keyGroup: "all",
        effect: "effect",
        period: 1,
        color: "#000",
      },
    });
    assert(kc instanceof KeyboardConfig);
  });
});
