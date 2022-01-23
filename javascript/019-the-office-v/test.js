const { assert } = require("chai");
const meeting = require("./solution");

describe("Example tests", () => {
  it("Tests", () => {
    assert.sameOrderedMembers(
      meeting(
        [
          ["XXX", 3],
          ["XXXXX", 6],
          ["XXXXXX", 9],
        ],
        4
      ),
      [0, 1, 3]
    );
    console.log("====");
    assert.sameOrderedMembers(
      meeting(
        [
          ["XXX", 1],
          ["XXXXXX", 6],
          ["X", 2],
          ["XXXXXX", 8],
          ["X", 3],
          ["XXX", 1],
        ],
        5
      ),
      [0, 0, 1, 2, 2]
    );
    assert.strictEqual(
      meeting(
        [
          ["XX", 2],
          ["XXXX", 6],
          ["XXXXX", 4],
        ],
        0
      ),
      "Game On"
    );
  });
});
