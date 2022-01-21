function deleteNth(arr, n) {
  const result = [];
  const lookup = {};
  for (const val of arr) {
    if (isNaN(lookup[val])) lookup[val] = 0;
    lookup[val]++;
    if (lookup[val] > n) continue;
    result.push(val);
  }
  return result;
}

module.exports = deleteNth;
