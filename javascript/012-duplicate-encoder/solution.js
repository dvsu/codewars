function duplicateEncode(word) {
  word = word.toLowerCase().split("");
  const unique = {};
  word.forEach((ch) =>
    isNaN(unique[ch]) ? (unique[ch] = 1) : (unique[ch] += 1)
  );

  word.forEach((ch, idx) => {
    word[idx] = unique[ch] === 1 ? "(" : ")";
  });
  return word.join("");
}

module.exports = duplicateEncode;
