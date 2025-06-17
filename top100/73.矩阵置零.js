/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 空间: m + n
// 时间: m * n * 2
var setZeroes = function (matrix) {
    const m = matrix.length
    const n = matrix[m - 1].length

    const setM = new Set()
    const setN = new Set()

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === 0) {
                setM.add(i)
                setN.add(j)
            }            
        }        
    }

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (setM.has(i) || setN.has(j)) {
                matrix[i][j] = 0
            }           
        }        
    }

    return matrix
};

console.log(setZeroes([
    [1, 1, 1],
    [1, 0, 1],
    [1, 1, 1]
]))

console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))