function isValidWalk(walk) {
  if (walk.length !== 10) return false;

  let x = 0;
  let y = 0;

  const step = {
    n: 1,
    s: -1,
    e: 1,
    w: -1,
  };

  for (let dir of walk) {
    if (dir === "n" || dir === "s") {
      y += step[dir];
      continue;
    }
    x += step[dir];
  }
  return !(x || y);
}

module.exports = isValidWalk;
