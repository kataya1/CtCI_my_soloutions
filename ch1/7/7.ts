// N x N matrix, pixes have 4 bytes ( 32 bits )
// var arr_name:datatype[][]=[ [val1,val2,val3],[v1,v2,v3] ]
let img: matrix = [ [ 0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff ],
            [ 0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff ],
            [ 0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff ],
            [ 0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff ],
            [ 0xff003322, 0xe5e5e5e5, 0xe3e3e3e3, 0x11111111, 0xffffffff ]
        ]
let img2 = [[1, 2, 3, 4, 5],
        [6, 7, 8, 9, 10],
        [11, 12, 13, 14, 15],
        [16, 17, 18, 19, 20],
        [21, 22, 23, 24, 25]
    ];
let img3 = [[1, 2, 3, 4, 5],
            [6, 7, 8, 9, 10]
    ];
type matrix = number[][] //?
const rotate =  ( m: matrix, deg: 'left' | 'right' = 'right'): matrix =>{
    let posx, posy;
    if( !m[0]) return []
    let newImg: matrix = Array(m[1].length).fill(null).map((_)=>  Array(m.length).fill(0) );
    let length = m.length
    let width = m[0].length
    
    for (  let i = 0; i < length ; i++){
        for (  let j = 0; j< width; j++ ){
            [posx , posy] = deg === 'right' ? [ j,  length - i - 1] : [width - 1 - j, i]
            newImg[posx][posy] = m[i][j]
        }
    }
    return newImg
}


// console.log(rotate(img))
// console.log(rotate(img2))
//this soloution can rotate N x M arrays left or right, O(NxM) space and time
console.log(rotate(img3))
console.log(rotate(img3, 'left'))