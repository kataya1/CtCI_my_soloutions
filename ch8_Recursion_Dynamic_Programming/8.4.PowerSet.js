function PowerSet(arr, index = arr.length - 1 , currentSet= [], ways = []){
    // arr is the set , currentSet is the 
    if (index == -1){
        ways.push([...currentSet])
        return ways
    }
    // backtracking i guess 
    
    // all possible ways without this element
    PowerSet(arr, index - 1, currentSet, ways)
    // add element
    currentSet.push(arr[index])
    // all possible ways with this element
    PowerSet(arr, index - 1, currentSet, ways)
    // remove element so that wn can compue the cases without this element but with other earlier indexes 
    //(earlier branches on the space state tree)
    currentSet.pop()
    return ways
}

console.log( PowerSet([1, 3, 4, 5]))