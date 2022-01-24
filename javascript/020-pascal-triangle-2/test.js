const { assert } = require("chai");
const pascal = require("./solution");

describe("Tests", () => {
  it("test", () => {
    assert.deepEqual(pascal(1), [[1]]);
    assert.deepEqual(pascal(5), [
      [1],
      [1, 1],
      [1, 2, 1],
      [1, 3, 3, 1],
      [1, 4, 6, 4, 1],
    ]);
  });
});
