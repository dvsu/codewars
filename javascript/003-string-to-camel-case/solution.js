function toCamelCase(str) {
  const strList = str.split(/_|-/);
  return (
    strList[0] +
    strList
      .slice(1)
      .map((word) =>
        word[0].charCodeAt(0) >= 97 && word[0].charCodeAt(0) <= 122
          ? `${String.fromCharCode(word[0].charCodeAt(0) - 32)}${word.slice(1)}`
          : word
      )
      .join("")
  );
}

module.exports = toCamelCase;
