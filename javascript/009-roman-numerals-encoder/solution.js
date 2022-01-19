function solution(number) {
  // convert the number to a roman numeral
  const mapping = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
  };
  let result = "";

  for (const [roman, dec] of Object.entries(mapping)) {
    if (!number) return result;
    if (Math.floor(number / dec)) {
      result += roman.repeat(Math.floor(number / dec));
      number %= dec;
    }
  }
  return result;
}

module.exports = solution;
