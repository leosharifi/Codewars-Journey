var capitals = function (word) {
  const fCapital = []
  for(let i = 0; i < word.length; i++) {
    if(word[i] == word[i].toUpperCase() && word[i] !== word[i].toLowerCase()) {
      fCapital.push(i)
    }
  }
  return fCapital;
};