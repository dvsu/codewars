const { assert } = require("chai");
const game = require("./solution");
const gameAlt = require("./alternative");

describe("Basic tests", function () {
  it("Test original solution", function () {
    assert.sameMembers(game(0), [0]);
    assert.sameMembers(game(1), [1, 2]);
    assert.sameMembers(game(8), [32]);
    assert.sameMembers(game(5), [25, 2]);
    assert.sameMembers(game(2), [2]);
  });

  it("Test alternative solution", function () {
    assert.sameMembers(gameAlt(0), [0]);
    assert.sameMembers(gameAlt(1), [1, 2]);
    assert.sameMembers(gameAlt(8), [32]);
    assert.sameMembers(gameAlt(5), [25, 2]);
    assert.sameMembers(gameAlt(2), [2]);
  });
});

// 0.5 1 1.5 2 2.5 3 3.5 4 3.5 3 2.5 2 1.5 1 0.5

// 1/2 2/3 3/4 4/5 5/6 6/7 7/8 8/9
// 1/3 2/4 3/5 4/6 5/7 6/8 7/9 8/10
// 1/4 2/5 ...
// 1/5 2/6
// 1/6 2/7
// 1/7 2/8
// 1/8 2/9
// 1/9 2/10 ...

// 0.5 1 1.5 1 0.5

// 1/2 2/3 3/4
// 1/3 2/4 3/5
// 1/4 2/5 3/6
