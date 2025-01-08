function findAverage(array) {
    if (array.length === 0) {
      return 0
    }
    const sum = array.reduce((a, b) => a + b, 0);
    const average =  sum / array.length;
    return average;
  }