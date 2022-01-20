// use left-right cursors to check for unique character
function duplicateEncode(word) {
  return word
    .toLowerCase()
    .split("")
    .map((val, _, arr) =>
      arr.indexOf(val) === arr.lastIndexOf(val) ? "(" : ")"
    )
    .join("");
}

module.exports = duplicateEncode;
