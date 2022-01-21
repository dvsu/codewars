// alternative solution using short-circuit operator and filter function

function deleteNth(arr, n) {
  const lookup = {};
  return arr.filter((val) => {
    lookup[val] = (lookup[val] || 0) + 1;
    return lookup[val] <= n;
  });
}

module.exports = deleteNth;
