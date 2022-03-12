class CircularArray<T>{
    pointer: number;
    
    arr: Array<T>;
    constructor(arr: Array<T> = []){
        this.pointer = 0
        this.arr = arr

    }
    push(item: T){
        this.arr.push(item)
    }
    get size(){
        return this.arr.length
    }
    at(i: number){
        return this.arr.at((i + this.pointer) % this.size)
    }
    rotateLeft(){
        this.pointer = (this.pointer + 1 ) % this.size
    }
    rotateRight(){
        this.pointer = (this.pointer - 1 + this.size) % this.size
    }
    pop(){
        this.arr.pop
    }
    // iterator so for..of works 
    *[Symbol.iterator] () {
        for(let i = 0; i < this.size; i++)
            yield this.at(i)
 


      }
}
let ca = new CircularArray(['a', 'b', 'c', 'd', 'e'])
// console.log(ca.at(0))
ca.rotateLeft()
// console.log(ca.at(0))
// ca.rotateLeft()
// ca.rotateLeft()
// console.log(ca.at(0))
// ca.rotateRight()
// ca.rotateRight()
// console.log(ca.at(0))

for( let l of ca){
    console.log(l)
}