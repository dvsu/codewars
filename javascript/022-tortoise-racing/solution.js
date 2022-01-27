function race(v1, v2, g) {
  if (v1 >= v2) return null;
  let sec = Math.floor((g / (v2 - v1)) * 3600);
  const time = [];
  for (let i = 0; i < 3; i++) {
    time.push(Math.floor(sec / 60 ** (2 - i)));
    sec %= 60 ** (2 - i);
  }
  return time;
}

module.exports = race;
