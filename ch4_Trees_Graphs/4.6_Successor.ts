class BSTnode{
    data: number
    left: BSTnode | null
    right: BSTnode | null
    parent: BSTnode | null
}
function next(n: BSTnode| null): BSTnode | null{
    if( n == null) return null
    if( n.right == null){
        let x = n.parent
        while( x.data < n.data){
            x = x.parent
            if (x == null ) break
        }
        return x
    }else{
        let x = n.right
        while( x.left != null)
            x = x.left
        return x
    }
}