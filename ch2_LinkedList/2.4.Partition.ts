type nodull = node | null
class node{
    public static head: node| null = null;
    constructor( 
        public data: number, 
        public next: node| null = null
        ){}

    public static partition(x: number){
        let  p: nodull  = node.head
        let  r: nodull =  p?.next ?? null
        if ( p === null || r === null) return 
        while( r != null){
            if( r.data >= x ){
                p = r
                r = r.next
            }else{
                p.next = r.next
                r.next = node.head
                node.head = r
                r = p.next 
            }
        }
    }
    public static printChain(node: nodull = this.head): string{
        if( node === null) return ''
        if (node.next === null) return `${node.data}`
        return `${node.data} -> ` + this.printChain(node.next)
    }
}
let n = new node(3, new node(5, new node(8, new node(5, new node( 10, new node(2, new node(1)))))))
node.head = n
console.log(node.printChain())
node.partition(5)
console.log(node.printChain())