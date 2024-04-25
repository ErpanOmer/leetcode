/**
 * @param {number} n
 * @return {number}
 */
var totalNQueens = function (n) {
    const matrix = Array(n).fill('#').map(() => Array(n).fill('#'))
    let count = 0

    const dfs = (i = 0, visited = Array(n), left = Array(2 * n - 1), right = Array(2 * n - 1)) => {
        if (i === n) {
            return count++
        }

        for (let j = 0; j < n; j++) {
            const l = i - j
            const r = i + j

            if (!visited[j] && !left[l] && !right[r]) {
                // 染
                // ran(i, j)
                matrix[i][j] = 'Q'
                left[l] = right[r] = visited[j] = true

                dfs(i + 1, visited, left, right)
                // 恢复
                matrix[i][j] = '#'
                left[l] = right[r] = visited[j] = false
            }
        }

        return count
    }

    return dfs()
};

console.time('2')
console.log(totalNQueens(10))
console.timeEnd('2')