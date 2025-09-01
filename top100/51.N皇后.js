/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    const matrix = Array.from({
        length: n
    }, () => Array(n).fill('.'))
    const res = []

    // let row = Array(n).fill(false)
    let col = Array(n).fill(false)
    let ext = Array((n * 2) - 1).fill(false)
    let extl = Array((n * 2) - 1).fill(false)

    const dfs = (i = 0) => {
        if (i === n) {
            return res.push(matrix.map(r => r.join('')))
        }

        for (let j = 0; j < n; j++) {
            if (!col[j] && !ext[i + j] && !extl[j - i + n - 1]) {
                matrix[i][j] = 'Q'
                col[j] = ext[i + j] = extl[j - i + n - 1] = true

                dfs(i + 1)

                matrix[i][j] = '.'
                col[j] = ext[i + j] = extl[j - i + n - 1] = false
            }
        }
    }

    dfs()

    return res
};


console.log(solveNQueens(4))