// without link to it's parents 
class Tnode{
    data: number
    left: Tnode
    right: Tnode 
    constructor(d: number){
        this.data = d
    }
}
type ans = {
    foundA : Boolean,
    foundB : Boolean,
    FCA: Tnode|null
}
function findCommonAncestor(root: Tnode, A:Tnode, B:Tnode): Tnode | null{
    return FCA(root, A, B).FCA
}
function FCA(current: Tnode, A: Tnode, B: Tnode): ans{
    if( current == null) return {
        foundA: false,
        foundB: false,
        FCA: null
    }
    let left = FCA( current.left, A, B)
    let right = FCA( current.right, A, B)
    let foundA = left.foundA || right.foundA || current == A
    let foundB = left.foundB || right.foundB || current == B
    let fca = (foundA && foundB && left.FCA == null && right.FCA == null && current != A && current != B) 
    ? current : (left.FCA ?? right.FCA)
    return { foundA, foundB, FCA: fca}
}

