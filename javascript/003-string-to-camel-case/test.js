const { assert } = require("chai");
const toCamelCase = require("./solution");
const toCamelCaseAlternative = require("./alternative");

describe("Tests", () => {
  it("test", () => {
    assert.strictEqual(
      toCamelCase(""),
      "",
      "An empty string was provided but not returned"
    );
    assert.strictEqual(
      toCamelCase("top_of_the_world"),
      "topOfTheWorld",
      "toCamelCase('top_of_the_world') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("The-Blue-Planet"),
      "TheBluePlanet",
      "toCamelCase('The-Blue-Planet') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("A-*-Z"),
      "A*Z",
      "toCamelCase('A-*-Z') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("more_complex-Text"),
      "moreComplexText",
      "toCamelCase('more_complex-Text') did not return correct value"
    );
    assert.strictEqual(
      toCamelCase("012-345-678-900"),
      "012345678900",
      "toCamelCase('012-345-678-900') did not return correct value"
    );
    // test alternative/ more concise solution
    assert.strictEqual(
      toCamelCaseAlternative(""),
      "",
      "An empty string was provided but not returned"
    );
    assert.strictEqual(
      toCamelCaseAlternative("top_of_the_world"),
      "topOfTheWorld",
      "toCamelCaseAlternative('top_of_the_world') did not return correct value"
    );
    assert.strictEqual(
      toCamelCaseAlternative("The-Blue-Planet"),
      "TheBluePlanet",
      "toCamelCaseAlternative('The-Blue-Planet') did not return correct value"
    );
    assert.strictEqual(
      toCamelCaseAlternative("A-*-Z"),
      "A*Z",
      "toCamelCaseAlternative('A-*-Z') did not return correct value"
    );
    assert.strictEqual(
      toCamelCaseAlternative("more_complex-Text"),
      "moreComplexText",
      "toCamelCaseAlternative('more_complex-Text') did not return correct value"
    );
    assert.strictEqual(
      toCamelCaseAlternative("012-345-678-900"),
      "012345678900",
      "toCamelCaseAlternative('012-345-678-900') did not return correct value"
    );
  });
});
