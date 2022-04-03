import { measureTime } from "./helpers"
function  dumb(steps: number): number{
    if (steps == 1) return 1
    if (steps == 2) return dumb(1) + 1
    if (steps == 3) return dumb( 2) + dumb(1) + 1 
    return dumb( steps - 1) + dumb(steps - 2) + dumb(steps - 3 )
}



console.log( measureTime(()=>{ return dumb(10)}))
console.log( measureTime(()=>{ return dumb(20)}))
console.log( measureTime(()=>{ return dumb(30)}))


function NumOfPossibleSteps(steps: number, arr: number[] = [0, 1, 2, 4]){
    if(!arr[steps]){
        arr[steps] = NumOfPossibleSteps(steps-1, arr) + NumOfPossibleSteps(steps - 2, arr) + NumOfPossibleSteps(steps- 3 , arr)
    }
    return arr[steps]
}


console.log( measureTime(()=>{ return NumOfPossibleSteps(10)}))
console.log( measureTime(()=>{ return NumOfPossibleSteps(20)}))
console.log( measureTime(()=>{ return NumOfPossibleSteps(100)}))


function nops(steps: number, a: number = 1, b: number = 2, c: number = 4): number{
    if ( steps  === 4) return a + b + c 
    return nops( steps -1 , b, c, a + b + c)
}

console.log( nops( 6 ))
console.log( nops( 10 ))