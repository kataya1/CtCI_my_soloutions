class LLNode<V>{
    data: V
    next: LLNode<V> | null = null
    constructor(d: V){
        this.data = d
    }
}
class LinkedList<V>{
    head: LLNode<V>| null = null;

    removeDubs(){
        if ((this.head) === null) return null

        let p : LLNode<V>| null   = this.head
        let set = new Set<V>()
        set.add(p.data)
        while ( p !== null){
            if(p.next != null ){
                if(set.has(p.next!.data))
                    p.next = p.next.next 
                else
                    set.add(p.next.data)   
            }
            p = p.next
        }
        
    }
}
