const { assert } = require("chai");
const XO = require("./solution");
const XOAlt = require("./alternative");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(XO("xo"), true);
    assert.strictEqual(XO("xxOo"), true);
    assert.strictEqual(XO("xxxm"), false);
    assert.strictEqual(XO("Oo"), false);
    assert.strictEqual(XO("ooom"), false);
    assert.strictEqual(XOAlt("xo"), true);
    assert.strictEqual(XOAlt("xxOo"), true);
    assert.strictEqual(XOAlt("xxxm"), false);
    assert.strictEqual(XOAlt("Oo"), false);
    assert.strictEqual(XOAlt("ooom"), false);
  });
});
