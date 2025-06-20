/**
 * @param {number[][]} matrix
 * @param {number} target
 * @return {boolean}
 */

// 先暴力吧
// 时间: mlogn
// 空间: 1

var searchMatrix = function (matrix, target) {
    const m = matrix.length

    let length = m

    while (length--) {
        const row = matrix[length]

        if (target >= row[0] && target <= row[row.length - 1]) {
            let i = 0
            let j = row.length

            while (i < j) {
                let m = Math.floor((i + j) / 2)

                if (row[m] === target) {
                    return true
                } else if (row[m] > target) {
                    j = m
                } else {
                    i = m + 1
                }

            }

        }
    }


    return false
};


// 空间: 1
// 时间: m + n
// 右上角开始查找
var searchMatrix = function (matrix, target) {
    const n = matrix.length
    const m = matrix[n - 1].length

    let i = 0
    let j = m - 1

    while(i < n && j >= 0) {
        if (matrix[i][j] === target) {
            return true
        } else if (matrix[i][j] > target) {
            j--
        } else {
            i++
        }

    }


    return false
}

console.log(searchMatrix([
    [1, 4, 7, 11, 15],
    [2, 5, 8, 12, 19],
    [3, 6, 9, 16, 22],
    [10, 13, 14, 17, 24],
    [18, 21, 23, 26, 30]
], 5))
console.log(searchMatrix([[1,4,7,11,15],[2,5,8,12,19],[3,6,9,16,22],[10,13,14,17,24],[18,21,23,26,30]], 20))
console.log(searchMatrix([[5]], 5))