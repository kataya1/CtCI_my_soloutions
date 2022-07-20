type nodull = null | node
class node {
    public data: number
    public left: nodull = null
    public right: nodull = null
    constructor(d: number, l: nodull = null, r: nodull = null) {
        this.data = d
        this.left = l
        this.right = r
    }
}

// doesn't work for now 
// let isSubtree = (r1: node | null, r2: node | null): boolean => {
//     if (r1 == null && r2 == null) return true
//     else if (r1 == null || r2 == null) return false
//     if (r1.data == r2.data) {
//         let left = isSubtree(r1.left, r2.left)
//         let right = isSubtree(r1.right, r2.right)
//         return left && right
//         // if (left && right) {
//         //     console.log(r1.data, r2.data)
//         //     return true
//         // }
//     }
//     let left = isSubtree(r1.left, r2)
//     let right = isSubtree(r1.right, r2)
//     return left || right
// }

function isSubtree(r1: nodull, r2: nodull): boolean{
    if (r2 == null) return true
    if (r1 == null) return false
    if ( matchTree(r1, r2)) return true
    return isSubtree(r1.left, r2) || isSubtree(r1.right, r2)
}

function matchTree(n1: nodull, n2: nodull): boolean{
    if( n1 == null && n2 == null) return true
    if( n1 == null || n2 == null) return false
    if (n1.data != n2.data) return false
    return matchTree(n1.left, n2.left) && matchTree(n1.right, n2.right)
}
let makeBST = (arr: number[]): node | null => {
    if (arr.length == 0) return null
    let root = new node(arr.shift()!)

    for (let a of arr) {
        insertNode(root, a)
    }
    return root
}
let insertNode = (n: node | null, num: number) => {
    if (n == null) return true
    if (num > n.data) {
        if (insertNode(n.right, num)) n.right = new node(num)
    }
    else {
        if (insertNode(n.left, num)) n.left = new node(num)
    }
    return false
}

// let t1 = makeBST([20, 15, 18, 40, 30, 25, 35, 27, 37])
// let t2 = makeBST([30, 25, 35, 27, 37])
let t1 = makeBST([5,3,2,7,6,4,8])
let t2 = makeBST([3,2,4])
console.log(isSubtree(t1, t2))
