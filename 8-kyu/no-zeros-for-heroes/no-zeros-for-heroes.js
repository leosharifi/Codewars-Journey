function noBoringZeros(n) {
  let num = n.toString()
  while (num.endsWith('0') && num != '0') {
    num = num.slice(0, -1)
  }
  return Number(num)
}
​