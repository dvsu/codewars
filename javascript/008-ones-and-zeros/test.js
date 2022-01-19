const { assert } = require("chai");
const binaryArrayToNumber = require("./solution");
const binaryArrayToNumberAlternative = require("./alternative");

describe("One's and Zero's", () => {
  it("Example tests", () => {
    assert.strictEqual(binaryArrayToNumber([0, 0, 0, 1]), 1);
    assert.strictEqual(binaryArrayToNumber([0, 0, 1, 0]), 2);
    assert.strictEqual(binaryArrayToNumber([1, 1, 1, 1]), 15);
    assert.strictEqual(binaryArrayToNumber([0, 1, 1, 0]), 6);
    assert.strictEqual(binaryArrayToNumberAlternative([0, 0, 0, 1]), 1);
    assert.strictEqual(binaryArrayToNumberAlternative([0, 0, 1, 0]), 2);
    assert.strictEqual(binaryArrayToNumberAlternative([1, 1, 1, 1]), 15);
    assert.strictEqual(binaryArrayToNumberAlternative([0, 1, 1, 0]), 6);
  });
});
