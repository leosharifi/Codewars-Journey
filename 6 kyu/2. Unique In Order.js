var uniqueInOrder=function(iterable){
    return [...iterable].filter((a,b) => a !== iterable[b-1])
  }