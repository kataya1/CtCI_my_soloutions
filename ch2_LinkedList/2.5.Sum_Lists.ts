function sumList (p1: node, p2: node){
    if ( p1 === null && p2 === null) return
    let dummy = new node(0)
    p1 = p1 ?? dummy
    p2 = p2 ?? dummy
    let sum: number;
    let carry: number = 0;
    let result: number;
    let ans: node = null;
    let k: node;

    while( p1 !== p2 ){
        sum = p1.data + p2.data + carry
        result = sum % 10
        carry = Math.floor(sum / 10)
        let nn =  new node( result )
        if( ans === null){
            ans = nn
            k = nn
        }else{
            k.next = nn
            k = k.next
        }
        p1 = p1.next === null ? dummy : p1.next
        p2 = p2.next === null ? dummy : p2.next
    }
    return ans
}