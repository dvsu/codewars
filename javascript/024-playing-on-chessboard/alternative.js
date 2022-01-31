// total is equal to n^2 / 2

function game(n) {
  const total = n * n;
  if (total % 2) return [total, 2];
  return [total / 2];
}

module.exports = game;
