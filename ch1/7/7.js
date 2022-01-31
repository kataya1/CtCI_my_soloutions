// let binaryNumber = 0b101010 
// let first:number = 123; // number 
// let second: number = 0x37CF;  // hexadecimal
// let third:number=0o377 ;      // octal
// let fourth: number = 0b111001;// binary  
// toExponential() 	Returns the exponential notation in string format.
// toFixed() 	Returns the fixed-point notation in string format.
// toPrecision() 	Returns the string representation in exponential or fixed-point to the specified precision.
// toString() 	Returns the string representation of the number in the specified base.
// valueOf() 	Returns the primitive value of the number. 
// N x N matrix, pixes have 4 bytes ( 32 bits )
// var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
var img = [[0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff],
    [0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff],
    [0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff],
    [0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff],
    [0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff]
];
var img = [[1, 2, 3, 4, 5],
    [6, 7, 8, 9, 10],
    [11, 12, 13, 14, 15],
    [16, 17, 18, 19, 20],
    [21, 22, 23, 24, 25]
];
var rotate = function (m, deg) {
    var img2 = m.map((arr) => arr.slice())
    var n = m.length;
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n; j++) {
            img2[j][n - i - 1] = m[i][j];
        }
    }
    return img2;
};
console.log(rotate(img));
