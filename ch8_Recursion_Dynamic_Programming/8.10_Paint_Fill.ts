
function paintFill(image: number[][], point: [number, number], color: number){
    let r = point[0]
    let c = point[1]
    let origincolor = image[r][c]
    fill( image, origincolor, color, r, c)

}
function fill( screen: number[][], originalColor: number, newColor: number,r: number, c: number){
    if ( r < 0 || c < 0 || r >= screen.length || c >= screen[0].length)
        return
    if( screen[r][c] == originalColor){
        screen[r][c] = newColor
        // we don't need 8 direction the 4 main directions are enough
        fill(screen, originalColor, newColor, r - 1, c - 1)
        fill(screen, originalColor, newColor, r - 1, c)
        fill(screen, originalColor, newColor, r - 1, c + 1)

        fill(screen, originalColor, newColor, r , c + 1)

        fill(screen, originalColor, newColor, r + 1, c + 1)
        fill(screen, originalColor, newColor, r + 1, c)
        fill(screen, originalColor, newColor, r + 1, c - 1)
        
        fill(screen, originalColor, newColor, r, c - 1)
    }
}