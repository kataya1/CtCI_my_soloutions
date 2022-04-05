
let arr1 = [ 0, 2, 3,4,5]
let arr2 = [ -3 , -1 ,  2, 3, 5]
let arr3 = [ 1, 4, 4, 4, 4, 5 , 5 , 6]

const findMagicIndex = ( arr: number[], i = 0 , magicIndexes: number[] = [] ): number[]=>{
    if ( i == arr.length || arr.length == 0) return magicIndexes
    // if (arr[i] > i) return magicIndexes
    else if ( arr[i] == i ) magicIndexes.push(i)
    return findMagicIndex(arr, i+1, magicIndexes)
}

const findMagicIndexTree = (arr: number[], left = 0 , right = arr.length - 1, magicIndexes = []) => {
    if (arr.length == 0 || left <= right) return magicIndexes
    let mid = Math.floor((left + right) / 2)
    // [ 0 , 1, 2, 50 , 74, 90, 90]
    if ( arr[mid] > mid ){
        findMagicIndexTree(arr, left, mid - 1, magicIndexes)
    }
    // [ -3 , -2 , 0 , 1 , 4]
    else if ( arr[mid] < mid ){
        findMagicIndexTree(arr, mid + 1 , right, magicIndexes)
    }
    else if ( arr[mid] == mid){
        magicIndexes.push(mid)
        findMagicIndexTree(arr, left, mid - 1, magicIndexes)
        findMagicIndexTree(arr, mid + 1 , right, magicIndexes)
    }
    return magicIndexes
}

console.log(findMagicIndex(arr1)) // [ 0 ]
console.log(findMagicIndex(arr2)) // [2. 3]
console.log(findMagicIndex(arr3)) // [4, 5]