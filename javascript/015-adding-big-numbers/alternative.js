// Alternative solution without using BigInt
function toIntReversedArray(arr, len) {
  return arr
    .padStart(len, "0")
    .split("")
    .reverse()
    .map((val) => parseInt(val));
}

function add(a, b) {
  const len = Math.max(a.length, b.length);
  const aArr = toIntReversedArray(a, len);
  const bArr = toIntReversedArray(b, len);
  let c = 0;

  let result = aArr.reduce((prev, curr, idx) => {
    d = ((curr + bArr[idx] + c) % 10).toString() + prev;
    c = Math.floor((curr + bArr[idx] + c) / 10);
    return d;
  }, "");
  return (c || "").toString() + result;
}

module.exports = add;
