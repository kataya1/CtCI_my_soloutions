// arr of bytes 
//  screen w = 8 * n
// h = arr.length / (w * 8)
// 
type byte = number
function drawLine(screen: byte[], width: number, x1: number, x2: number, y: number){
    let startByte = y * ( width / 8) + Math.floor(x1/ 8) 
    let endByte =  y * ( width / 8) + Math.floor(x2/8)
    for( let i = startByte + 1 ; i < endByte ; i ++){
        screen[i] |= 0xff
    }
    screen[startByte] =  (screen[startByte] & 0) |  ((1 << (8 - x1 + 1)) - 1)
    screen[endByte] =  (screen[startByte] & 0) |  (-1 << (8 - x2))
    
}

