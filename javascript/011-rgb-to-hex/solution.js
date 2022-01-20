const intToHex = (int) => {
  if (int > 255) return "FF";
  if (int < 0) return "00";

  return int.toString(16).toUpperCase().padStart(2, "0");
};

function rgb(r, g, b) {
  return `${intToHex(r)}${intToHex(g)}${intToHex(b)}`;
}

module.exports = rgb;
