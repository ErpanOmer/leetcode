/**
 * @param {number[][]} matrix
 * @return {void} Do not return anything, modify matrix in-place instead.
 */

// 空间： n * n
// 时间:  n * n * 2
// 比较容易想到
var rotate = function (matrix) {
    const n = matrix.length
    const m = matrix.length
    let left = 0
    let top = 0
    let right = n - 1
    let bottom = m - 1
    const result = []

    while (left <= right && top <= bottom) {
        for (let i = bottom; i >= top; i--) {
            result.push(matrix[i][left])
        }

        left++

        for (let i = left; i <= right; i++) {
            result.push(matrix[top][i])
        }

        top++

        for (let i = top; i <= bottom; i++) {
            result.push(matrix[i][right])
        }

        right--

        for (let i = right; i >= left; i--) {
            result.push(matrix[bottom][i])
        }

        bottom--
    }

    left = top = 0
    right = bottom = n - 1
    let index = 0

    while (left <= right && top <= bottom) {
        for (let i = left; i <= right; i++) {
            matrix[top][i] = result[index++]
        }

        top++

        for (let i = top; i <= bottom; i++) {
            matrix[i][right] = result[index++]
        }

        right--

        for (let i = right; i >= left; i--) {
            matrix[bottom][i] = result[index++]
        }

        bottom--

        for (let i = bottom; i >= top; i--) {
            matrix[i][left] = result[index++]
        }

        left++
    }

    return matrix
};

// 只能背公式了 + 原地复制
// https://pic.leetcode-cn.com/1638557961-AVzCQb-ccw-01-07.001.png
// 空间： n * n
// 时间:  n * n + n
var rotate = function (matrix) {
    const temp = []

    for (let i = 0; i < matrix.length; i++) {
        temp[i] = [...matrix[i]]
    }

    for (let i = 0; i < matrix.length; i++) {
        for (let j = 0; j < matrix[i].length; j++) {
            matrix[j][matrix.length - 1 - i] = temp[i][j]
        }
    }

    return matrix
}

// 原地算法, 又是背公式
// https://pic.leetcode-cn.com/1638557961-qCicMC-ccw-01-07.005.png
var rotate = function (matrix) {
    const length = matrix.length

    for (let i = 0; i < Math.floor(length / 2); i++) {
        for (let j = 0; j < Math.floor((length + 1) / 2); j++) {
            const temp = matrix[i][j]

            matrix[i][j] = matrix[length - 1 - j][i]
            matrix[length - 1 - j][i] = matrix[length - 1 - i][length - 1 - j]
            matrix[length - 1 - i][length - 1 - j] = matrix[j][length - 1 - i]
            matrix[j][length - 1 - i] = temp
        }
    }

    return matrix
}

// 反转 -> 交换
// 又是背公式 数学题
var rotate = function (matrix) {
    const length = matrix.length

    // 行翻转
    for (let i = 0; i < Math.floor(length / 2); i++) {
        const temp = matrix[i]
        matrix[i] = matrix[matrix.length - 1 - i]
        matrix[matrix.length - 1 - i] = temp
    }

    // i 和 j 互换
    for (let i = 0; i < length; i++) {
        for (let j = 0; j < i; j++) {
            const temp = matrix[i][j]
            matrix[i][j] = matrix[j][i]
            matrix[j][i] = temp
        }        
    }

    return matrix
}


console.log(rotate([
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]))

console.log(rotate([
    [5, 1, 9, 11],
    [2, 4, 8, 10],
    [13, 3, 6, 7],
    [15, 14, 12, 16]
]))

// 什么时候用“行翻转”，什么时候用“列翻转”？
// 这取决于你要实现哪种旋转方向：

// 操作顺序	最终效果
// 行翻转 + 转置	顺时针旋转 90° ✅
// 列翻转 + 转置	逆时针旋转 90° ✅
// 转置 + 行翻转	逆时针旋转 90° ❗
// 转置 + 列翻转	顺时针旋转 90° ❗

// 注意：操作顺序不同也会影响最终效果。虽然转置是对称的，但“翻转”是在什么位置做的，会造成不同的几何结果。

// 如何记忆而不是死背？
// 可以记住这样一个视觉规律：

// 顺时针旋转 90° = 上下翻转 + 转置

// 逆时针旋转 90° = 左右翻转 + 转置

// 旋转 180° = 上下翻转 + 左右翻转

// 你可以用这组口诀来不用“背公式”：

// 👉 “顺时针，上下转”
// 👉 “逆时针，左右转”
