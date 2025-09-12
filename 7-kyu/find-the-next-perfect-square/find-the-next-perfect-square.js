function findNextSquare(sq) {
  const rootNumber = Math.sqrt(sq);
  return Number.isInteger(rootNumber) ? (rootNumber + 1) ** 2 : -1
}