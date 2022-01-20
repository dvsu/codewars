const { assert } = require("chai");
const isValidWalk = require("./solution");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      isValidWalk(["n", "s", "n", "s", "n", "s", "n", "s", "n", "s"]),
      true,
      "should return true"
    );
    assert.strictEqual(
      isValidWalk(["w", "e", "w", "e", "w", "e", "w", "e", "w", "e", "w", "e"]),
      false,
      "should return false"
    );
    assert.strictEqual(isValidWalk(["w"]), false, "should return false");
    assert.strictEqual(
      isValidWalk(["n", "n", "n", "s", "n", "s", "n", "s", "n", "s"]),
      false,
      "should return false"
    );
  });
});
