class Stack<T>{
    #content: T[] = []

    push(v: T): void{
        this.#content.push(v)
    }
    pop(): T| undefined{
        return this.#content.pop()
    }
    peek(): T| null{
        let size =  this.#content.length
        return size > 0 ? this.#content[ size - 1] : null 
    }
    isEmpty(){
        return this.#content.length === 0 
    }

    isFull(limit : number){
        return this.#content.length === limit 
    }
    print(n: number = this.#content.length): string{
        return `${this.#content}`
    }
}

class setOfStacks<T>{
    #stacks: Stack<T>[] = []
    private threshold: number;
    constructor(th: number){
        this.threshold = th
    }
    private addStack(){
        this.#stacks.push(new Stack())
    }
    private removeStack(): boolean{
        if(this.#stacks.length <= 0) return false
        this.#stacks.pop()
        return true
    }
    push(v: T): void{
        let size = this.#stacks.length
        if ( size === 0 || this.#stacks[ size - 1].isFull(this.threshold)){
            this.addStack()
            return this.push(v)
        }
        else{
            this.#stacks[size - 1].push(v)
        }

    }
    pop(): T| void{
       let size = this.#stacks.length
       if( size === 0 ) return 
       if(this.#stacks[size - 1].isEmpty()){
           this.removeStack()
           return this.pop()
       }else{
           return this.#stacks[size - 1].pop()
       }
    }
    print(){
        let j = []
        for(let s of this.#stacks){
            j.push(`s${j.length} : ${s.print()}`)
        }
        return j.join('\n')
    }
}

let s = new setOfStacks(4)
s.push(Math.floor(Math.random()* 100))
s.push(Math.floor(Math.random()* 100))
s.push(Math.floor(Math.random()* 100))
s.push(Math.floor(Math.random()* 100))
s.push(Math.floor(Math.random()* 100))
s.push(Math.floor(Math.random()* 100))
console.log(s.print())
s.pop()
s.pop()

console.log(s.print())
