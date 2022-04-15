
function coinCombinationForNCent( n: number, ways: number[][] = [], quarters = 0, dimes = 0, nickles = 0, pennies = 0  ){
    // i didn't listen correctly 
    // i only need to calculate the number not the ways 
    // this will but a stain on memory 

    if ( n < 0 || n % 1 != 0) return
    else if ( n == 0) ways.push( [ quarters, dimes,  nickles, pennies ])
    else{
        if( pennies == 0 && (dimes == 0) && nickles ==  0)
            coinCombinationForNCent( n - 25, ways, quarters + 1, dimes, nickles, pennies )
        if( (pennies == 0) &&( nickles == 0))
            coinCombinationForNCent( n - 10, ways, quarters, dimes + 1, nickles, pennies )
        if( pennies == 0)
            coinCombinationForNCent( n - 5, ways, quarters, dimes, nickles + 1, pennies )
        coinCombinationForNCent( n - 1, ways, quarters, dimes, nickles, pennies + 1)
    }
    return ways
}
console.log(coinCombinationForNCent( 1))
console.log(coinCombinationForNCent( 100))
