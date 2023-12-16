/**
 * @param {number[][]} matrix
 * @return {number[]}
 */
var spiralOrder = function(matrix) {
    const arr = []
    let length = matrix.length * matrix[matrix.length - 1].length

    let toLeft = 0
    let toRight = matrix[matrix.length - 1].length - 1
    let toBottom = matrix.length - 1
    let toTop = 0

    while(arr.length < length) {
        for (let i = toLeft; i <= toRight && arr.length < length; i++) {
            arr.push(matrix[toTop][i])   
        }
        toTop++

        for (let i = toTop; i <= toBottom && arr.length < length; i++) {
            arr.push(matrix[i][toRight])   
        }

        toRight--

        for (let i = toRight; i >= toLeft && arr.length < length; i--) {
            arr.push(matrix[toBottom][i])   
        }

        toBottom--

        for (let i = toBottom; i >= toTop && arr.length < length; i--) {
            arr.push(matrix[i][toLeft])   
        }

        toLeft++
    }

    return arr
};


console.log(spiralOrder([[1,2,3],[4,5,6],[7,8,9]]))
console.log(spiralOrder([[1,2,3,4],[5,6,7,8],[9,10,11,12]]))
console.log(spiralOrder([[3],[2]]))