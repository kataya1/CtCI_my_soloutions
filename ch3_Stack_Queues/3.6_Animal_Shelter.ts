class node<T> {
   val: T;
   next: node<T>| null;
   constructor(t: T, n: node<T> | null = null){
       this.val = t

       this.next = n
   }
}
class LinkedList<T>{
    length: number = 0;
    head: node<T> | null = null;
    tail: node<T> | null = null;

    protected init(n: node<T>){
        this.head = n
        this.tail = n;
    }
    isEmpty(){
        return this.length === 0
    }

    print(n = this.head): string{
        if ( n == null) return ''
        if ( n.next == null) return `${n.val}`
        return `${ n.val } -> ${this.print(n.next)}`
    }
}

class Queue<T> extends LinkedList<T>{
    
    enqueu(d: T){
        let nn = new node(d)
        if(this.isEmpty())
            this.init(nn)
        else{
            this.tail!.next = nn
            this.tail = nn
        }
        this.length += 1
    }

    dequeu(){
        if( this.isEmpty()) return 
        let n = this.head
        this.head = this.head!.next
        this.length -= 1
        if( this.isEmpty()) this.tail = null
        return n.val
    }
    peek(){
        return this.head.val
    }
}
class Animal{
    name: string;
    #type: string;
    #turn: number;
    constructor(name?: string, turn?:number, type?:string){
        this.name = name
        this.#type = type
        this.#turn = turn
    }
    public cameBefore(a: Animal){
        return this.#turn < a.#turn
    }
    public speak(){};
}
class Shelter{
    cats = new Queue<Animal>()
    dogs = new Queue<Animal>()
    order: number  = 0;
    
    enqueuCat(name: string){
        let cat = new Animal(name, this.order , 'cat')
        this.cats.enqueu(cat)
        this.order++
    }
    enqueuDog(name: string){
        let dog = new Animal(name, this.order , 'dog')
        this.dogs.enqueu(dog)
        this.order++
    }
    dequeueAny(): Animal{
        let c = this.cats.peek();
        let d = this.dogs.peek()
        // smaller turn means arrived first 
        return c.cameBefore(d) ? this.dequeueCat() : this.dequeueDog()

    }
    dequeueCat(){
        return this.cats.dequeu()
    }

    dequeueDog(){
        return this.dogs.dequeu()
    }

}
