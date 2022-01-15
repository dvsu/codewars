const { assert } = require("chai");
const triangular = require("./solution");

describe("Basic tests", () => {
  it("Testing for fixed tests", () => {
    assert.strictEqual(triangular(2), 3);
    assert.strictEqual(triangular(4), 10);
    assert.strictEqual(triangular(0), 0);
    assert.strictEqual(triangular(-3), 0);
    assert.strictEqual(triangular(5), 15);
  });
});
