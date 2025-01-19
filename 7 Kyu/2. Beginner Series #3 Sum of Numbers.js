function getSum(a, b)
{
  if (a == b) {
    return a
  }
  const min = Math.min(a,b)
  const max = Math.max(a,b)
  let sum = 0
  for (i = min; i <= max; i++) {
    sum += i
  }
  return sum
   //Good luck!
}