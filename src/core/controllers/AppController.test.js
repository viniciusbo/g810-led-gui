import assert from "assert";
import sinon from "sinon";
import AppController from "./AppController";

describe("AppController", () => {
  it("should dispatch config to use case", () => {
    const spy = sinon.spy();
    const appController = AppController(spy);
    const config = {
      model: "foo",
      keyGroup: "bar",
      effect: "foobar",
      period: "1s",
      color: "#fff",
      targetColor: "#000",
    };
    appController(config);
    assert(spy.calledWith(config));
  });
});
