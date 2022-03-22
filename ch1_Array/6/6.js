// 'aabcccccaaa' => 'a2b1c5a3'
// 'abcada' => 'a1b1c1a1d1a1'
var addToArr = function (arr, letter, num) {
    arr.push("".concat(letter).concat(num));
};
var strComp = function (s) {
    if (!s || s.length <= 2) {
        return s;
    }
    s = s.toLowerCase();
    var concatArr = [];
    var currentLetter = s[0];
    var count = 0;
    var slen = s.length;
    for (var i = 0; i < slen; i++) {
        if (concatArr.length * 2 >= s.length)
            return s;
        if (s[i] !== currentLetter) {
            addToArr(concatArr, currentLetter, count);
            currentLetter = s[i];
            count = 1;
        }
        else
            count += 1;
        if (i === slen - 1)
            addToArr(concatArr, currentLetter, count);
    }
    return concatArr.length * 2 >= s.length ? s : concatArr.join('');
};
console.log(strComp('aabcccccaaa'));
console.log(strComp('abcada'));
console.log(strComp('a'));
console.log(strComp('bb'));
console.log(strComp(''));
console.log(strComp('AaAa'));
