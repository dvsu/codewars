function validate(arr) {
  return arr.length === 9 && arr[0] === 1 && arr.slice(-1)[0] === 9;
}

function validSolution(board) {
  for (let i = 0; i < 9; i++) {
    // validate horizontal
    const h = [...new Set(board[i])].sort();
    if (!validate(h)) return false;
    // validate vertical and block
    let vpre = [];
    let bpre = [];
    for (let j = 0; j < 9; j++) {
      vpre.push(board[j][i]);
      bpre.push(
        board[3 * Math.floor(i / 3) + Math.floor(j / 3)][
          3 * Math.floor(i / 3) + (j % 3)
        ]
      );
    }
    const v = [...new Set(vpre)].sort();
    const b = [...new Set(bpre)].sort();
    if (!(validate(v) && validate(b))) return false;
  }
  return true;
}

module.exports = validSolution;
