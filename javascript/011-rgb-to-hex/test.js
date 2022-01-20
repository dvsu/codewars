const { assert } = require("chai");
const rgb = require("./solution");

describe("Tests", () => {
  it("Basic Tests", () => {
    assert.strictEqual(rgb(0, 0, 0), "000000");
    assert.strictEqual(rgb(0, 0, -20), "000000");
    assert.strictEqual(rgb(300, 255, 255), "FFFFFF");
    assert.strictEqual(rgb(173, 255, 47), "ADFF2F");
  });
});
