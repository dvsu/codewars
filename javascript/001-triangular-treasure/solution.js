// Return the nth triangular number
function triangular(n) {
  if (n < 0) return 0;
  return ((n + 1) * n) / 2;
}

module.exports = triangular;
