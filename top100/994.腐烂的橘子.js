/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
    const m = grid.length
    const n = grid[m - 1].length
    const queue = []
    let count = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (grid[i][j] === 2) {
                queue.push([i, j])
            }

            if (grid[i][j] === 1) {
                count++
            }
        }
    }

    let minute = 0
    while (queue.length) {
        let len = queue.length
    
        while (len--) {
            const [i, j] = queue.shift()

            if (j + 1 < n && grid[i][j + 1] === 1) {
                queue.push([i, j + 1])
                count--
                grid[i][j + 1] = 2
            }

            if (j > 0 && grid[i][j - 1] === 1) {
                queue.push([i, j - 1])
                count--
                grid[i][j - 1] = 2
            }

            if (i + 1 < m && grid[i + 1][j] === 1) {
                queue.push([i + 1, j])
                count--
                grid[i + 1][j] = 2
            }

            if (i > 0 && grid[i - 1][j] === 1) {
                queue.push([i - 1, j])
                count--
                grid[i - 1][j] = 2
            }
        }


        if (queue.length) {
            minute++
        }
    }

    return count > 0 ? -1 : minute
};

// console.log(orangesRotting([[2,1,1],[1,1,0],[0,1,1]]))
// console.log(orangesRotting([[2,1,1],[0,1,1],[1,0,1]]))
console.log(orangesRotting([
    [2, 1, 1],
    [1, 1, 1],
    [0, 1, 2]
]))