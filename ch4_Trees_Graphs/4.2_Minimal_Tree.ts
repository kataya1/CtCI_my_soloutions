class Binode{
    data: number
    left: Binode | null= null
    right: Binode | null = null
    constructor(v: number){
        this.data = v
    } 
    printPreOrder(node: Binode = this){
        if(node !== null) {
        console.log(node.data)
        this.printPreOrder(node.left)
        this.printPreOrder(node.right)
        }
    }
    printInOrder(node: Binode = this){
        if(node == null) return  
        this.printInOrder(node.left)
        console.log(node.data)
        this.printInOrder(node.right)
    }
}

export function makeBST(arr: number[], i = 0 , j = arr.length - 1){
    if( j < i ) return null
    let mid = Math.ceil((i + j) / 2)
    let n = new Binode( arr[mid] )
    n.left = makeBST(arr, i , mid - 1)
    n.right = makeBST(arr, mid + 1, j)
    return n
}
import {Tree} from './4.5_Validate_BST'

(()=>{let t = new Tree()
let arr1 = [1,2,3,4,5,6,7]
let arr2 = [1,2,3,4,5,6]

let r1 = makeBST( arr1 )
let r2 = makeBST( arr2 )
r1.printInOrder()
console.log(t.validateBST(r1))
console.log(t.validateBST(r2))})