function XO(str) {
  let exes = 0;
  let ohs = 0;
  for (const c of str.toLowerCase()) {
    if (c === "o") {
      ohs++;
      continue;
    }
    if (c === "x") exes++;
  }
  return exes === ohs;
}

module.exports = XO;
