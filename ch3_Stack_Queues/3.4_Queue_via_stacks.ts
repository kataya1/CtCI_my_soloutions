class Stack<T> extends Array{
    isEmpty(){
        return this.length === 0
    }    
}

class MyQ<T> {
    s1: Stack< T > = new Stack() 
    s2: Stack< T > = new Stack()
    
    enqueu(v: T): MyQ<T>{
        this.s1.push(v)
        return this
    }
    dequeue( ): T | undefined{
        if( !this.s2.isEmpty()) return this.s2.pop()
        else if ( this.s2.isEmpty() && !this.s1.isEmpty()){
            this.s2 = this.s1.reverse() as Stack<T>
            this.s1 = new Stack()
            return this.s2.pop()
        }
        else return undefined
    }
    isEmpty(): boolean{
        return this.s1.isEmpty() && this.s2.isEmpty()
    }
    peek(): T | undefined{
        if ( !this.s2.isEmpty())
            return this.s2[this.s2.length - 1]
        else if ( !this.s1.isEmpty())
            return this.s1[0]
        else
            return undefined
    }
    print(){
        return `
         s1: [ ${this.s1} ]
         s2: [ ${this.s2} ]
        `
        
    }
}

let q = new MyQ()
q.enqueu(1)
q.enqueu(2)
q.enqueu(3)
q.enqueu(4)
console.log(q.print())
q.dequeue()
q.dequeue()
console.log(q.print())
q.enqueu(5)
console.log(q.print())
