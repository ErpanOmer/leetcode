/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */
var searchMatrix = function(matrix, target) {
    let i = 0
    let j = matrix[i].length - 1

    while(i < matrix.length && j >= 0) {
        if (matrix[i][j] === target) {
            return true
        }

        target > matrix[i][j] ? i++ : j--
    }

    return false
};


console.log(searchMatrix([[1]], 5))