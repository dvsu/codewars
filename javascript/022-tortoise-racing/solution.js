function race(v1, v2, g) {
  if (v1 >= v2) return null;
  let sec = Math.floor((g / (v2 - v1)) * 3600);
  const time = [];
  for (let i = 2; i >= 0; i--) {
    time.push(Math.floor(sec / 60 ** i));
    sec %= 60 ** i;
  }
  return time;
}

module.exports = race;
