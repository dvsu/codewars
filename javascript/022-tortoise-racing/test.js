const { assert } = require("chai");
const race = require("./solution");
const raceAlt = require("./alternative");

describe("Tortoise Racing", function () {
  it("Using native for loop ", function () {
    assert.sameMembers(race(720, 850, 70), [0, 32, 18]);
    assert.sameMembers(race(80, 91, 37), [3, 21, 49]);
    assert.sameMembers(race(80, 100, 40), [2, 0, 0]);
  });

  it("Using map function", function () {
    assert.sameMembers(raceAlt(720, 850, 70), [0, 32, 18]);
    assert.sameMembers(raceAlt(80, 91, 37), [3, 21, 49]);
    assert.sameMembers(raceAlt(80, 100, 40), [2, 0, 0]);
  });
});
