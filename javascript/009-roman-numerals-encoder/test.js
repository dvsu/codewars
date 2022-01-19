const { assert } = require("chai");
const solution = require("./solution");

describe("solution", () => {
  it("should handle small numbers", () => {
    assert.strictEqual(solution(1), "I", '1 should, "I"');
    assert.strictEqual(solution(2), "II", '2 should, "II"');
    assert.strictEqual(solution(3), "III", '3 should, "III"');
    assert.strictEqual(solution(4), "IV", '4 should, "IV"');
    assert.strictEqual(solution(5), "V", '5 should, "V"');
    assert.strictEqual(solution(9), "IX", '9 should, "IX"');
    assert.strictEqual(solution(10), "X", '10 should, "X"');
    assert.strictEqual(solution(11), "XI");
    assert.strictEqual(solution(19), "XIX");
    assert.strictEqual(solution(22), "XXII");
    assert.strictEqual(solution(15), "XV");
  });

  it("should handle large numbers", () => {
    assert.strictEqual(solution(1000), "M", '1000 should, "M"');
    assert.strictEqual(solution(1001), "MI", '1001 should, "MI"');
    assert.strictEqual(solution(1990), "MCMXC", '1990 should, "MCMXC"');
    assert.strictEqual(solution(2007), "MMVII", '2007 should, "MMVII"');
    assert.strictEqual(solution(2008), "MMVIII", '2008 should, "MMVIII"');
  });
});
