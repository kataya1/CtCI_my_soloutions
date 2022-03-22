
function kthToLast(n: Node, k: number){
    let [p1, p2] = [n, n]
    while(p2.next != null){
        if( k === 1) p1 = p1.next
        else k--
        p2 = p2.next 
    }
    if ( p2.next === null && k > 0) return 'Error'
    return p1
}