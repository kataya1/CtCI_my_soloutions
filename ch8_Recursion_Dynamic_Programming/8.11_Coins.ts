
function coinCombinationForNCent( n: number, ways: number[][] = [], quarters = 0, dimes = 0, nickles = 0, pennies = 0  ){
    // i didn't listen correctly 
    // i only need to calculate the number not the ways 
    // this will but a stain on memory 

    if ( n < 0 || n % 1 != 0) return  // if the coins left is less than 0 or if n is not an integere ( we don't have half pennies )
    else if ( n == 0) ways.push( [ quarters, dimes,  nickles, pennies ])
    // instead of passing prematives here  which would cause O(4n)space 
    // we could pass an array and backtrack like arr[index] -= 1   will be O( 4) space
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
