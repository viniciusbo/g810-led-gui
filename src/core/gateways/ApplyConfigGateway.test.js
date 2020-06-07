import assert from "assert";
import sinon from "sinon";
import KeyboardConfig from "../entities/KeyboardConfig";
import ApplyConfigGateway from "./ApplyConfigGateway";

describe("ApplyConfigGateway", () => {
  it("given keyboardConfig, should dispatch config to IPC", () => {
    const spy = sinon.spy();
    const kc = new KeyboardConfig({
      model: "g810",
      config: {
        keyGroup: "all",
        effect: "effect",
        period: "1s",
        color: "#000",
        targetColor: "#fff",
      },
    });
    const applyConfigGateway = ApplyConfigGateway(spy);
    applyConfigGateway(kc);
    assert(spy.calledWith(kc));
  });
});
