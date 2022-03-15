// info: rn, passed as a double(long floats),
// can be represented in 32bit ? print binary rep : "Error"
//Q: inclusive [0, 1]? 

// exponent and mantessa ( 5, 26) sign = 0 

function binToString(n: number){
    // if number had more than 255 leading 0 can't be represented 
    // if number had more than 23 bits it can't be represented 
    // let mantesa  = []  // 23
    // let exponent = []  // 8
    /// fuuck it. this doesn't take  knowledge
    if (n > 1 || n < 0) return "Error"
    let binRep = ['0.']
    let x: number = n
    while(x > 0 && binRep.length <= 32){
        x = x * 2
        if ( x >= 1){
            x = x -  1
            binRep.push('1')
        }
        else{
            binRep.push('0')
        }
    }
    if( x > 0 && binRep.length === 33) return "Error"
    else return binRep.join('')
}

console.log(binToString(0.6255342856783467856932))
console.log(binToString(0.625))
