function findUniq(arr) {
  arr.sort((a, b) => a - b);
  return arr[0] === arr[1] ? arr.slice(-1)[0] : arr[0];
}

module.exports = findUniq;
