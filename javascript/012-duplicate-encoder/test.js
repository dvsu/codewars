const { assert } = require("chai");
const duplicateEncode = require("./solution");
const duplicateEncodeAlt = require("./alternative");

describe("Duplicate Encoder", () => {
  it("Find unique values then replace each character based on uniqueness", () => {
    assert.strictEqual(duplicateEncode("din"), "(((");
    assert.strictEqual(duplicateEncode("recede"), "()()()");
    assert.strictEqual(
      duplicateEncode("Success"),
      ")())())",
      "should ignore case"
    );
    assert.strictEqual(duplicateEncode("(( @"), "))((");
    assert.strictEqual(duplicateEncode(" ( ( )"), ")))))(");
  });

  it("Use left-right cursors to check for uniqueness in an array", () => {
    assert.strictEqual(duplicateEncodeAlt("din"), "(((");
    assert.strictEqual(duplicateEncodeAlt("recede"), "()()()");
    assert.strictEqual(
      duplicateEncodeAlt("Success"),
      ")())())",
      "should ignore case"
    );
    assert.strictEqual(duplicateEncodeAlt("(( @"), "))((");
    assert.strictEqual(duplicateEncodeAlt(" ( ( )"), ")))))(");
  });
});
