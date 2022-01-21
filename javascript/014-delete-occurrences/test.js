const { assert } = require("chai");
const deleteNth = require("./solution");

describe("Tests", () => {
  it("test", () => {
    assert.sameOrderedMembers(
      deleteNth([20, 37, 20, 21], 1),
      [20, 37, 21],
      "Actual does not match the expected order"
    );
    assert.sameOrderedMembers(
      deleteNth([1, 1, 3, 3, 7, 2, 2, 2, 2], 3),
      [1, 1, 3, 3, 7, 2, 2, 2],
      "Actual does not match the expected order"
    );
  });
});
