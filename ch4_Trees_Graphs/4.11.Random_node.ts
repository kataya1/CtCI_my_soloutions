// the question was phrased in a very interesting way.The interviewer did not simply say, "Design an algorithm to return a random node from a binary tree:'We were told that this is a class that we're building from scratch.There is a reason the question was phrased that way. We probably need access to some part of the internals of the data structure.


class BT{
    root: node | null;
    insert(d: number, ): boolean{
 
        let next = this.root
        while(next != null){
            if (d >= next.val){
                next.numNodesRight += 1
                if (next.right == null){
                    next.right = new node(d)
                    return true
                }
                next = next.right
            }
            else{
                next.numNodesLeft += 1
                if( next.left == null){
                    next.left = new node(d)
                    return true
                }
                next = next.left
            }
        }
        this.root = new node(d)

        return true
    }
    find(d: number, n = this.root){
        if (n == null) return false
        if ( n.val >= d) return this.find(d, n.right)
        else return this.find(d, n.left)
    }
    delete(){

    }
    getRandomNode(n = this.root){
        if (n == null) return 
        let curr = n
        let totalNodes = curr.numNodesLeft + curr.numNodesRight + 1
        let stopagePercentage = 1 / totalNodes
        let stop = Math.random() < 1 / (curr.numNodesLeft + curr.numNodesRight + 1)

        if (stop) return curr
        let nextNode = Math.random() < curr.numNodesLeft / (totalNodes - 1) ? curr.left : curr.right;
        return this.getRandomNode(nextNode)
    }
}

class node{
    val: number
    left: node | null
    right: node | null
    numNodesLeft: number = 0
    numNodesRight: number = 0
    constructor(d: number){
        this.val = d
    }
}
