/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */
var setZeroes = function(matrix) {
    const row = {}
    const column = {}

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (matrix[i][j] === 0) {
                row[i] = true
                column[j] = true
            }       
        }
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            if (row[i] || column[j]) {
                matrix[i][j] = 0
            }
        }
    }


    return matrix
};


// 时间复杂度：O(m * n)
// 空间复杂度：O(m + n)


console.log(setZeroes([[0,1,2,0],[3,4,5,2],[1,3,1,5]]))
console.log(setZeroes([[1,1,1],[1,0,1],[1,1,1]]))