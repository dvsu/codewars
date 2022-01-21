const { assert } = require("chai");
const getPINs = require("./solution");

describe("example tests", function () {
  it("Member existence test", function () {
    assert.sameMembers(
      getPINs("8"),
      ["5", "7", "8", "9", "0"],
      "members do not match"
    );
    assert.sameMembers(
      getPINs("11"),
      ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
      "members do not match"
    );
    assert.sameMembers(
      getPINs("369"),
      [
        "339",
        "366",
        "399",
        "658",
        "636",
        "258",
        "268",
        "669",
        "668",
        "266",
        "369",
        "398",
        "256",
        "296",
        "259",
        "368",
        "638",
        "396",
        "238",
        "356",
        "659",
        "639",
        "666",
        "359",
        "336",
        "299",
        "338",
        "696",
        "269",
        "358",
        "656",
        "698",
        "699",
        "298",
        "236",
        "239",
      ],
      "members do not match"
    );
    assert.sameMembers(
      getPINs("007"),
      [
        "004",
        "007",
        "008",
        "084",
        "087",
        "088",
        "804",
        "807",
        "808",
        "884",
        "887",
        "888",
      ],
      "members do not match"
    );
    assert.sameMembers(
      getPINs("11"),
      ["11", "22", "44", "12", "21", "14", "41", "24", "42"],
      "members do not match"
    );
  });
});
