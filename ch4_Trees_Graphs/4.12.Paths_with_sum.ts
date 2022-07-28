
// 1. brute force create all the paths of 1 and see which is equal to sum, then all paths of two, untill all paths of the longest branch length.
// Brute Force
type direction = "L" | "R"
class PathObject{
    sum: number;
    startingNode: node
    path: direction[] = [];
    constructor(r: node){
        this.startingNode = r
        this.sum = r.val
    }
    add(n: node| null, b:Boolean): void{
        if (n == null) return 
        this.sum += n.val
        this.path.push( b? "R" : "L")
    }
    remove(n: node| null):void{
        if (n == null) return
        this.sum -= n.val
        this.path.pop()
    }
}
function getHeight(root: node| null): number{
    if (root == null) return 0
    let lh = getHeight(root.left)
    let rh = getHeight(root.right)
    return 1 + Math.max(lh, rh)
}
class node{
    val: number
    left: node| null;
    right: node| null;
}

function numPaths(root: node,value: number ): number{
    if ( root == null) return 0
    let maxH = getHeight(root)
    let allPathsSum: number[]= []
    for(let i = 0; i <maxH; i++){
        func2(root, i, allPathsSum)
    }
    return allPathsSum.reduce((prev, curr ) => curr == value ? prev + 1 : prev, 0)

}
function func2( sn: node| null, stop: number, allPathsSum: number[]): void{
    if (sn == null) return 
    func2(sn.left, stop, allPathsSum)
    func2(sn.right, stop, allPathsSum)
    let po = new PathObject(sn)
    func3(sn, stop, po, allPathsSum)
}

function func3( sn: node| null, stop: number, po: PathObject, allPathsSum: number[] ): void{
    if (sn == null) return
    if (stop < 0) return
    else if  (stop == 0){
        allPathsSum.push(po.sum)
    }
    else{
        po.add(sn.left, false)
        func3(sn.left, stop - 1, po, allPathsSum)
        po.remove(sn.left)
        po.add(sn.right, true)
        func3(sn.right, stop - 1, po, allPathsSum)
        po.remove(sn.right)
    }
}
