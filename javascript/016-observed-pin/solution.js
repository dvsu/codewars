function generate(num, patterns) {
  if (patterns.length === 1 && num !== null)
    return patterns[0].map((val) => `${num}${val}`);

  let result = [];
  for (const i of patterns[0]) {
    result = result.concat(
      generate(i, patterns.slice(1)).map(
        (val) => `${num == null ? "" : num}${val}`
      )
    );
  }
  return result;
}

function getPINs(observed) {
  const patternMap = {
    0: [0, 8],
    1: [1, 2, 4],
    2: [1, 2, 3, 5],
    3: [2, 3, 6],
    4: [1, 4, 5, 7],
    5: [2, 4, 5, 6, 8],
    6: [3, 5, 6, 9],
    7: [4, 7, 8],
    8: [5, 7, 8, 9, 0],
    9: [6, 8, 9],
  };
  if (observed.length === 1)
    return patternMap[parseInt(observed)].map((val) => val.toString());
  const patterns = observed.split("").map((val) => patternMap[parseInt(val)]);
  return generate(null, patterns);
}

module.exports = getPINs;
