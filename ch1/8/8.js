"use strict";
const findZeros = (matrix, m, n) => {
    let rows = new Set();
    let columns = new Set();
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                rows.add(i);
                columns.add(j);
            }
        }
    }
    return [rows, columns];
};
/*
const letsZerotheLine = (matrix: matrix, line: Set, config: 'r' | 'c'): void => {
    //if config = row we want to know the length of columns
    let oppositeLen = config === 'r'? matrix[0].length : matrix.length

}*/
const zeroMatrix = (matrix) => {
    if (matrix.length === 0 || matrix[0].length === 0)
        return false;
    let m = matrix.length;
    let n = matrix[0].length;
    let [rows, columns] = findZeros(matrix, m, n);
    for (let x of rows) {
        for (let j = 0; j < n; j++) {
            matrix[x][j] = 0;
        }
    }
    for (let x of columns) {
        for (let i = 0; i < m; i++) {
            matrix[i][x] = 0;
        }
    }
    return matrix;
};
let mat1 = [
    [10, 11, 12, 13, 14, 15],
    [20, 21, 22, 23, 24, 25],
    [30, 31, 32, 0, 34, 35],
    [40, 41, 42, 43, 44, 45],
    [50, 0, 52, 53, 54, 55],
    [60, 61, 62, 63, 64, 65],
];
console.log(zeroMatrix(mat1));
