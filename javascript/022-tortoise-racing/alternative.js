// alternative, much slower solution using map function

function race(v1, v2, g) {
  if (v1 >= v2) return null;
  let sec = Math.floor((g / (v2 - v1)) * 3600);
  return [...new Array(3)].map((_, idx) =>
    Math.floor((sec % 60 ** (3 - idx)) / 60 ** (2 - idx))
  );
}

module.exports = race;
