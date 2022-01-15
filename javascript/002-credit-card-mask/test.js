const { assert } = require("chai");
const maskify = require("./solution");

describe("maskify", () => {
  it("should work for some examples", () => {
    assert.strictEqual(maskify("4556364607935616"), "############5616");
    assert.strictEqual(maskify("1"), "1");
    assert.strictEqual(maskify("11111"), "#1111");
    assert.strictEqual(maskify(""), "");
  });
});
