// sum of squares up to nth sequence is equal to (n+2)th fibonacci - 1

function perimeter(n) {
  if (!n) return 4;
  let temp;
  let prev = 1;
  let curr = 1;

  for (let i = 0; i < n + 1; i++) {
    temp = prev;
    prev = curr;
    curr += temp;
  }
  return (curr - 1) * 4;
}

module.exports = perimeter;
