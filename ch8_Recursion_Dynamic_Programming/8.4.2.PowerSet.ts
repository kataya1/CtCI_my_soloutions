
// this is the bit mas soloution or ( )
function getPowerSet(set: number[] , powerSet: number[][] = [], current: number = (1 << set.length) - 1): number[][]{
    if (current < 0) return powerSet
    let ss = []
    for( let i = current, j = 0;  j < set.length ; i >>= 1, j++){
        // loop will never end if because if we keep shifting i it will always be 0 
        //that's why the exit condition needs to have j
        if ( (i & 1) === 1)
            ss.push(set[j])
        console.log( {i, j})
    }
    powerSet.push(ss)
    return getPowerSet(set, powerSet, current - 1) 
}

console.log(getPowerSet([]))