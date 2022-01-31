function game(n) {
  let total = n * 0.5;
  for (let i = 1; i < n; i++) {
    total += i * 0.5 * 2;
  }
  if (n % 2 === 0) return [total];
  return [total * 2, 2];
}

module.exports = game;
