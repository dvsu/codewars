const { assert } = require("chai");
const perimeter = require("./solution");
const perimeterAlt = require("./alternative");

describe("Basic tests", function () {
  it("Test original solution", function () {
    assert.strictEqual(perimeter(0), 4);
    assert.strictEqual(perimeter(5), 80);
    assert.strictEqual(perimeter(7), 216);
    assert.strictEqual(perimeter(20), 114624);
    assert.strictEqual(perimeter(30), 14098308);
  });

  it("Test alternative solution", function () {
    assert.strictEqual(perimeterAlt(0), 4);
    assert.strictEqual(perimeterAlt(5), 80);
    assert.strictEqual(perimeterAlt(7), 216);
    assert.strictEqual(perimeterAlt(20), 114624);
    assert.strictEqual(perimeterAlt(30), 14098308);
  });
});
