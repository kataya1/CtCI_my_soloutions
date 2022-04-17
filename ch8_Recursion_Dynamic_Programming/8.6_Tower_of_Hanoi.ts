class Disc extends Number{
    value: number;
    constructor(v: number){
        super(v)
        this.value = v
    }
}

class Tower{
    stack: Array<number> = []
    name: string;
    constructor(name: string){
        this.name = name
    }
    add(d: number) {
        if( this.size() === 0 || (this.peek() && this.peek()! > d))
            this.stack.push(d) 
        else
            throw new Error('what the fuck')
    }
    moveTopTo(t: Tower): boolean {
        if (!this.size()) return false
        let p = this.stack.pop()
        t.add(p!)
        return true
    }
    peek(): number | undefined{
        if( this.size() == 0)
            return 
        return this.stack[this.size() - 1 ]
    }
    size(): number{
        return this.stack.length
    }
}
class Hanoi{
    origin: Tower
    buffer: Tower
    destination: Tower
    numOfDiscs: number
    steps: string[] = []
    constructor(numOfDiscs: number){
        this.origin = new Tower('src ')
        this.buffer = new Tower('buff')
        this.destination = new Tower('dest')
        for( let i = numOfDiscs ; i > 0 ; i--){
            this.origin.add( i )
        }
        this.numOfDiscs = numOfDiscs
    }
    print(){
        console.log('origin: ', this.origin.stack)
        console.log('buffer: ', this.buffer.stack)
        console.log('destination: ', this.destination.stack)
        console.log('\n')
    }

    solve(origin = this.origin, destination = this.destination, buffer = this.buffer, n = this.numOfDiscs){    
        if ( n == 0) return 
        if( n == this.numOfDiscs) this.print()
        this.solve(  origin , buffer, destination, n - 1)
        this.steps.push(`move ${origin.peek()} from ${origin.name} to ${destination.name}\n`)
        origin.moveTopTo(destination)
        this.print()
        this.solve( buffer, destination, origin , n - 1)
    }
    printSteps(){
        console.log(this.steps.toString())
    }

}

let h = new Hanoi(4)

h.solve()
h.printSteps()


// function solve(origin = [], destination = [], buffer = [], n = origin.length ){    
//     if ( n == 0) return 
//     // move n - 1 discs from thi given origin tower to middle( buffer ) using the tower named desination as buffer
//     this.solve(  origin , buffer, destination, n - 1)
//     destination.push(origin.pop())
//     // then move the stack of n -1 discs from buffer(tower) to destination using the tower (origin) as buffer 
//     this.solve( buffer, destination, origin , n - 1)
// }
// var start = [ 5, 4 , 3 , 2 , 1]
// var mid = [ ] 
// var end = [ ]
// solve( start, end , mid)
// console.log(end)