
class qnode<T>{
    data: T;
    next: qnode<T>| null = null;
    constructor(d: T){
        this.data = d
    }
}
export class Queue<T>{
    head: qnode<T>| null = null;
    tail: qnode<T>| null = null;
    enqueue(d: T){
        let nn = new qnode(d)
        if( this.tail == null){
            this.head = nn
        }else{   
            this.tail.next = nn
        }
        this.tail = nn
    }

    dequeue(): T | null{
        if (this.head == null) return null
        let d = this.head.data
        this.head = this.head.next 
        if (this.head == null)  this.tail = null
        return d
    }
    peek(){
        if (this.head == null ) return
        return this.head.data
    }
    isEmpty(){
        return this.head === null
    }
}