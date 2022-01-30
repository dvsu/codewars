function perimeter(n) {
  if (!n) return 4;
  let temp = 1;
  let prev = 1;
  let curr = 1;
  let total = 2;

  for (let i = 0; i < n - 1; i++) {
    temp = curr;
    curr += prev;
    prev = temp;
    total += curr;
  }
  return total * 4;
}

module.exports = perimeter;
