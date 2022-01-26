function revrot(str, sz) {
  if (!sz || str.length < sz) return "";
  const segments = [];
  for (let i = 0; i < str.length; i += sz) {
    let digits = str.slice(i, i + sz).split("");
    if (digits.length < sz) break;

    const total = digits
      .map((val) => parseInt(val) ** 3)
      .reduce((prev, cur) => prev + cur);

    if (total % 2 === 0) {
      segments.push(digits.reverse().join(""));
      continue;
    }
    segments.push([...digits.slice(1), digits[0]].join(""));
  }
  return segments.join("");
}

module.exports = revrot;
