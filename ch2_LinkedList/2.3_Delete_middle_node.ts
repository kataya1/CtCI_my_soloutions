interface node{
    data: string
    next: node | null


}
// O(n)
function DeleteNode(n: node){
    let k: node = n;
    while( n.next != null){
        n.data = n.next.data
        k = n
        n = n.next
    }
    k.next = null
}

// O(1)
function deleteNode(n: node){
    if( n === null || n.next === null) return false
    n.data = n.next.data
    n.next = n.next.next 
    return true
} 