function findOutlier(integers) {
  evenCounter = 0;
  oddCounter = 0;
  lastEven = null;
  lastOdd = null;

  for (const val of integers) {
    if (!(val % 2)) {
      lastEven = val;
      evenCounter++;
    } else {
      lastOdd = val;
      oddCounter++;
    }
    if (evenCounter > 1 && oddCounter) return lastOdd;
    if (oddCounter > 1 && evenCounter) return lastEven;
  }
}

module.exports = findOutlier;
