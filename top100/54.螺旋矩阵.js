/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function (matrix) {
    const result = []
    const n = matrix.length
    const m = matrix[n - 1].length
    let left = 0
    let right = m - 1
    let top = 0
    let bottom = n - 1

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }

        top++

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }

        right--

        if (top <= bottom) {
            for (let i = right; i >= left; i--) {
                result.push(matrix[bottom][i])
            }
        }

        bottom--

        if (left <= right) {
            for (let i = bottom; i >= top; i--) {
                result.push(matrix[i][left])
            }
        }

        left++
    }

    return result
};


console.log(spiralOrder([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12]
]))
console.log(spiralOrder([
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 16],
    [17, 18, 19, 20],
    [21, 22, 23, 24]
]))

console.log(spiralOrder([
    [3],
    [2]
]))
console.log(spiralOrder([
    [2, 3, 4],
    [5, 6, 7],
    [8, 9, 10],
    [11, 12, 13]
]))