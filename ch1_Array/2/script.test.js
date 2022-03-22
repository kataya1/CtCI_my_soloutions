const isPermutation = require('./script.js')

test( 'test if one sting is a permuation of the other', 

()=>{
    expect(isPermutation('dog', 'god')).toBe(true)
    expect(isPermutation('dolly', 'ylyod')).toBe(false)

})