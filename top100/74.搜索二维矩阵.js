/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 线性算法
// 如果目标比当前位置大 → 丢掉整行
// 如果目标比当前位置小 → 丢掉整列
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[m - 1].length
    let i = 0
    let j = n - 1

    // 右上角开始查找
    while(j >= 0 && i < m) {
        if (matrix[i][j] === target) {
            return true
        } else if (target > matrix[i][j]) {
            i++
        } else {
            j--
        }
    } 

    
    return false
};


// 试试 二分查找
var searchMatrix = function(matrix, target) {
    let m = matrix.length
    let n = matrix[m - 1].length

    let left = 0
    let right = m * n - 1

    while(left <= right) {
        const middle = Math.floor((left + right) / 2)
        const row = Math.floor(middle / n)
        const col = middle % n

        if (target === matrix[row][col]) {
            return true
        } else if (target > matrix[row][col]) {
            left = middle + 1
        } else {
            right = middle - 1
        }
    }
    
    return false
};


console.log(searchMatrix([[1],[3]], 3))