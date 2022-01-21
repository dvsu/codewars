const { assert } = require("chai");
const add = require("./solution");
const addLegacy = require("./alternative");

describe("Add two numbers", function () {
  it("Test simple solution using BigInt", function () {
    assert.strictEqual(add("1", "1"), "2");
    assert.strictEqual(add("123", "456"), "579");
    assert.strictEqual(add("888", "222"), "1110");
    assert.strictEqual(add("1372", "69"), "1441");
    assert.strictEqual(add("12", "456"), "468");
    assert.strictEqual(add("101", "100"), "201");
    assert.strictEqual(
      add("63829983432984289347293874", "90938498237058927340892374089"),
      "91002328220491911630239667963"
    );
  });

  it("Test alternative solution without using BigInt", function () {
    assert.strictEqual(addLegacy("1", "1"), "2");
    assert.strictEqual(addLegacy("123", "456"), "579");
    assert.strictEqual(addLegacy("888", "222"), "1110");
    assert.strictEqual(addLegacy("1372", "69"), "1441");
    assert.strictEqual(addLegacy("12", "456"), "468");
    assert.strictEqual(addLegacy("101", "100"), "201");
    assert.strictEqual(
      add("63829983432984289347293874", "90938498237058927340892374089"),
      "91002328220491911630239667963"
    );
  });
});
