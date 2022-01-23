function meeting(x, need) {
  if (!need) return "Game On";
  let result = [];
  for (const room of x) {
    let rem = room[1] - room[0].length;
    if (rem < 0) {
      result.push(0);
      continue;
    }
    if (need <= rem) {
      result.push(need);
      return result;
    }
    result.push(rem);
    need -= rem;
    if (need === 0) return result;
  }
  return "Not enough!";
}

module.exports = meeting;
