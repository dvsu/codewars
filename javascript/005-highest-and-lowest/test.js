const { assert } = require("chai");
const highAndLow = require("./solution");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(highAndLow("8 3 -5 42 -1 0 0 -9 4 7 4 -4"), "42 -9");
    assert.strictEqual(highAndLow("1 2 3 4 5"), "5 1");
    assert.strictEqual(highAndLow("0 0 0 -100 -0.02 -1 5 -9"), "5 -100");
  });
});
