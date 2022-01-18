// alternative solution using built-in toUpperCase method

function toCamelCase(str) {
  return str
    .split(/_|-/)
    .map((word, idx) =>
      idx === 0 ? word : `${word[0].toUpperCase()}${word.slice(1)}`
    )
    .join("");
}

module.exports = toCamelCase;
