function XO(str) {
    const xCount = str.toLowerCase().split('').filter(c => c === 'x').length;
    const oCount = str.toLowerCase().split('').filter(c => c === 'o').length;
    return xCount === oCount;
}
