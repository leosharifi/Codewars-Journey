function comp(array1, array2){
    //your code here
    if(array1 == null || array2 == null) return false
    
    if (array1.length !== array2.length) return false
    let squaredNum = array1.map(num => num ** 2);
    let sortedSquaredNum = squaredNum.sort((a, b) => a - b);
    let SortingArray2 = array2.sort((a, b) => a -b)
    return sortedSquaredNum.every((num, i) => num === SortingArray2[i]);
}