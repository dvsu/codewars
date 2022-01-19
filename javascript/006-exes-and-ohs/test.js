const { assert } = require("chai");
const XO = require("./solution");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(XO("xo"), true);
    assert.strictEqual(XO("xxOo"), true);
    assert.strictEqual(XO("xxxm"), false);
    assert.strictEqual(XO("Oo"), false);
    assert.strictEqual(XO("ooom"), false);
  });
});
