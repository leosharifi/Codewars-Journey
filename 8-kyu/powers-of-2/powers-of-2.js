function powersOfTwo(n){
  const finalresult = []
  for(let i = 0; i <= n; i++) {
    finalresult.push(Math.pow(2,i))
  }
  return finalresult;
}