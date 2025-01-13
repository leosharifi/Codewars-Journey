function fakeBin(x){
    return x.split('').map(x => x < 5 ? 0 : 1).join('')
}