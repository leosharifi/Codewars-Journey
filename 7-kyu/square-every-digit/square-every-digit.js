function squareDigits(num){
  return Number(
  num
    .toString()
    .split("")
    .map(d => d ** 2)
    .join('')
  
  )
}