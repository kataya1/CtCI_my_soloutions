import { Queue } from './helpers'
class linkedlist<T> extends Queue<T>{
    constructor(d: T){
        super()
        this.enqueue(d)
    }
    append(d: T){
        this.enqueue(d)
    }
}
interface TreeNode<T>{
    data: T
    left: TreeNode<T> | null
    right: TreeNode<T> | null
}
function listOfDepth<H>(root: TreeNode<H>){
    let list : linkedlist<TreeNode<H>>[]

    function bfs( root: TreeNode<H>){
        let q = new Queue<[TreeNode<H>, number]>()

        q.enqueue([root, 1])
        while (!q.isEmpty()){
            let nn = q.dequeue()
            if( nn[0].left){
                q.enqueue([nn[0].left, nn[1] + 1])
            }
            if( nn[0].right ){
                q.enqueue([nn[0].right, nn[1] + 1])
            }
            if( list.length == nn[1]){
                list[list.length - 1].append(nn[0])
            }
            else if( list.length == nn[1] - 1 ){
                let ll = new linkedlist(nn[0])
                list.push(ll)
            }
        }
    }
}