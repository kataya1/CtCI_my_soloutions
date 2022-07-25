// the question was phrased in a very interesting way.The interviewer did not simply say, "Design an algorithm to return a random node from a binary tree:'We were told that this is a class that we're building from scratch.There is a reason the question was phrased that way. We probably need access to some part of the internals of the data structure.

class BT {
    root: node | null;

    insert(d: number,): boolean {

        let next = this.root
        while (next != null) {
            if (d >= next.val) {
                next.numNodesRight += 1
                if (next.right == null) {
                    next.right = new node(d)
                    return true
                }
                next = next.right
            }
            else {
                next.numNodesLeft += 1
                if (next.left == null) {
                    next.left = new node(d)
                    return true
                }
                next = next.left
            }
        }
        this.root = new node(d)

        return true
    }
    find(d: number, n = this.root): node | null {
        if (n == null) return null
        if (n.val == d) return n
        else if (d > n.val) return this.find(d, n.right)
        else return this.find(d, n.left)
    }
    getParent(d: number) {
        if (this.root == null || this.root.val == d) return null
        const compareChildren = (r: node | null): node | null => {
            if (r == null) return null
            if (r.right != null && r.right.val == d) return r
            else if (r.left != null && r.left.val == d) return r
            else {
                return (d > r.val) ? compareChildren(r.right)
                    : compareChildren(r.left)
            }
        }
    }

    // delete(d: number) {
    //     let node = this.find(d)
    //     const getLastChild = (n: node): node => {
    //         if (n.right != null) return getLastChild(n.right)
    //         else if (n.left != null) return getLastChild(n.left)
    //         else return n
    //     }
    //     let lc = getLastChild(node)
    //     if (lc == node) 
    // }

    getRandomNode(n = this.root): node | null {
        if (n == null) return null
        let curr = n
        let totalNodes = curr.numNodesLeft + curr.numNodesRight + 1
        let stopagePercentage = 1 / totalNodes
        let stop = Math.random() < 1 / (curr.numNodesLeft + curr.numNodesRight + 1)

        if (stop) return curr
        let nextNode = Math.random() < curr.numNodesLeft / (totalNodes - 1) ? curr.left : curr.right;
        return this.getRandomNode(nextNode)
    }
    getRandomNode2(): node | null {
        let randNum = Math.floor(Math.random() * this.size())
        if (this.root == null) return null
        const traverse = (num: number, n: node): node => {
            if (n.numNodesLeft == num) return n
            else if (num < n.numNodesLeft)
                return traverse(num, n.left!)
            else
                return traverse(num - n.numNodesLeft - 1, n.right!)
        }
        return traverse(randNum, this.root)
    }
    size(): number {
        return this.root ? this.root?.numNodesLeft + this.root?.numNodesRight + 1 : 0
    }
}

class node {
    val: number
    left: node | null
    right: node | null
    numNodesLeft: number = 0
    numNodesRight: number = 0
    constructor(d: number) {
        this.val = d
    }
}

let bt = new BT()
bt.insert(10)
bt.insert(8)
bt.insert(9)
bt.insert(4)
bt.insert(1)
bt.insert(6)
bt.insert(0)
bt.insert(2)
bt.insert(3)
bt.insert(5)
bt.insert(7)
bt.insert(15)
bt.insert(20)
bt.insert(17)
bt.insert(16)
bt.insert(19)
bt.insert(26)
console.log(bt.getRandomNode())
console.log(bt.getRandomNode())
console.log(bt.getRandomNode())
console.log(bt.getRandomNode2())
console.log(bt.getRandomNode2())
console.log(bt.getRandomNode2())
console.log(bt.getRandomNode2())
