const { assert } = require("chai");
const arrayDiff = require("./solution");
const arrayDiffAlt = require("./alternative");

describe("Sample tests", function () {
  it("Test main solution", function () {
    assert.deepEqual(arrayDiff([], [4, 5]), [], "a was [], b was [4,5]");
    assert.deepEqual(arrayDiff([3, 4], [3]), [4], "a was [3,4], b was [3]");
    assert.deepEqual(
      arrayDiff([1, 8, 2], []),
      [1, 8, 2],
      "a was [1,8,2], b was []"
    );
    assert.deepEqual(
      arrayDiff([1, 2, 3], [1, 2]),
      [3],
      "a was [1,2,3], b was [1,2]"
    );
  });

  it("Test alternative solution using 'includes'", function () {
    assert.deepEqual(arrayDiffAlt([], [4, 5]), [], "a was [], b was [4,5]");
    assert.deepEqual(arrayDiffAlt([3, 4], [3]), [4], "a was [3,4], b was [3]");
    assert.deepEqual(
      arrayDiffAlt([1, 8, 2], []),
      [1, 8, 2],
      "a was [1,8,2], b was []"
    );
    assert.deepEqual(
      arrayDiffAlt([1, 2, 3], [1, 2]),
      [3],
      "a was [1,2,3], b was [1,2]"
    );
  });
});
