const numberSwapper = (x: number, y: number) => {
    x = x - y
    y = x + y
    x = y - x
    return [x, y]
}

const numberSwapperSilly = (x: number, y: number) => {
    return [y, x]
}
const numberSwapper2 = (x: number, y: number) => {
    x ^= y
    y ^= x
    x ^= y
}
const numberSwapper3 = (x: number, y: number) => {
    x = x * y
    y = x / y
    x = x / y
    return [x, y]
}
