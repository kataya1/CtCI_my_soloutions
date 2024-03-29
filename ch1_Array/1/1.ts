const hasUniqueChars3 = (s: string): boolean => {
	for (let i = 0; i < s.length; i++) {
		for (let j = i + 1; j < s.length; j++) {
			if (s[i] == s[j]) return false
		}
	}
	return true
}


console.log(hasUniqueChars3("abc")) //true
console.log(hasUniqueChars3("abcc")) //false
console.log(hasUniqueChars3("")) //true

export const hasUniqueChars = (s: string): boolean => {
	// O(n)
	let uniqueVals = new Set()
	for (let i of s) {
		if (uniqueVals.has(i)) return false
		uniqueVals.add(i)
	}

	return true
}

export const hasUniqueChars2 = (s: string): boolean => {
	// O( nlogn)
	let sortedS = [...s].sort()
	for (let i = 0; i < sortedS.length - 1; i++) {
		if (sortedS[i] === sortedS[i + 1]) return false
	}
	return true
}

let a = "n39ri1yaim"
let b = "abcdefghijklmmnopqrstuvwxyz"
console.log(hasUniqueChars(a))
console.log(hasUniqueChars(b))
console.log(hasUniqueChars2(a))
console.log(hasUniqueChars2(b))
// test
// module.exports = hasUniqueChars
