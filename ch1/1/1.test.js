// import { hasUniqueChars, hasUniqueChars2 } from './1.js'
const hasUniqueChars = require('./1')
test("testing if all characters in a string is unique", ()=>{
    expect(hasUniqueChars('abcd')).toBe(true)
    expect(hasUniqueChars('abbcdef')).toBe(false)
    expect(hasUniqueChars('isrntin2in3itnicsnvy092e4nis.v')).toBe(false)
    expect(hasUniqueChars('abcdefghijklmnopqrstuvwxyz')).toBe(true)
})
// test("testing if all characters in a string is unique", ()=>{
//     expect(hasUniqueChars2('abcd')).toBe(true)
//     expect(hasUniqueChars2('abbcdef')).toBe(false)
//     expect(hasUniqueChars2('isrntin2in3itnicsnvy092e4nis.v')).toBe(false)
//     expect(hasUniqueChars2('abcdefghijklmnopqrstuvwxyz')).toBe(true)
// })
