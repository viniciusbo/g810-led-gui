import assert from "assert";
import sinon from "sinon";
import KeyboardConfig from "../entities/KeyboardConfig";
import ApplyEffectsUseCase from "./ApplyEffectsUseCase";

describe("ApplyEffectsUseCase", () => {
  it("given config parameter, should dispatch KeyboardConfig instance to gateway", () => {
    const spy = sinon.spy();
    const config = {
      model: "g810",
      config: {
        keyGroup: "all",
        effect: "effect",
        period: "1s",
        color: "#000",
        targetColor: "#fff",
      },
    };
    const applyEffectsUseCase = ApplyEffectsUseCase(spy);
    applyEffectsUseCase(config);
    assert(spy.lastCall.firstArg instanceof KeyboardConfig);
  });
});
