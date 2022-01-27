const { assert } = require("chai");
const race = require("./solution");

describe("Tortoise Racing", function () {
  it("Basic tests ", function () {
    assert.sameMembers(race(720, 850, 70), [0, 32, 18]);
    assert.sameMembers(race(80, 91, 37), [3, 21, 49]);
    assert.sameMembers(race(80, 100, 40), [2, 0, 0]);
  });
});
