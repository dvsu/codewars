function pascal(depth) {
  const result = [[1]];
  if (depth === 1) return result;

  for (let curr = 2; curr <= depth; curr++) {
    let row = [1];
    let step = curr % 2 === 0 ? curr / 2 - 1 : (curr - 1) / 2;
    for (let seq = 0; seq < step; seq++) {
      row.push(result[curr - 2][seq] + result[curr - 2][seq + 1]);
    }
    let mirrored =
      curr % 2 === 0
        ? row.slice().reverse()
        : row.slice(0, row.length - 1).reverse();
    row.push(...mirrored);
    result.push(row);
  }
  return result;
}

module.exports = pascal;
