type nnode = node | null
class node{
    value: number
    left: nnode = null
    right: nnode = null
}
interface heightobj  { height?: number, balanced: boolean}
class Tree{
    root: nnode

    #gethight(node: nnode): heightobj{
        if (node == null) return { height: 0, balanced: true}
        let  leftinfo = this.#gethight(node.left)
        let rightinfo = this.#gethight(node.right)
        if (leftinfo.balanced === false) return leftinfo
        if (rightinfo.balanced === false) return rightinfo
        if (Math.abs(leftinfo.height - rightinfo.height) > 1 ){
            return {balanced: false}
        }
        else 
            return {height: 1 + Math.max(leftinfo.height, rightinfo.height), balanced: true}
    }
    checkBalnace(node: nnode): boolean{
        if (node == null) return true
        return this.#gethight(node).balanced
    }
}
