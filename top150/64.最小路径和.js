/**
 * @param {number[][]} grid
 * @return {number}
 */

// 递归 + 记忆化搜索
var minPathSum = function(grid) {
    const map = new Map()

    const dfs = (i = 0, j = 0) => {
        if (map.has(`${i}-${j}`)) {
            return map.get(`${i}-${j}`)
        }

        if (i === grid.length - 1 && j === grid[i].length - 1) {
            return grid[grid.length - 1][grid[i].length - 1]
        }

        if (i > grid.length - 1 || j > grid[i].length - 1) {
            return Number.MAX_SAFE_INTEGER
        }

        return map.set(`${i}-${j}`, Math.min(dfs(i + 1, j), dfs(i, j + 1)) + grid[i][j]).get(`${i}-${j}`)
    }


    return dfs()
};

// dp ? 空间优化 原地修改
var minPathSum = function(grid) {
    const m = grid.length
    const n = grid[0].length
    let i = m

    while(i--) {
        let j = n
        
        while(j--) {
            if (i + 1 < m && j + 1 < n) {
                grid[i][j] = Math.min(grid[i + 1][j], grid[i][j + 1]) + grid[i][j]
            } else if (j + 1 >= n && i + 1 < m) {
                grid[i][j] = grid[i + 1][j] + grid[i][j]
            } else if (i + 1 >= m && j + 1 < n) {
                grid[i][j] = grid[i][j + 1] + grid[i][j]
            }

            // grid[i][j] = Math.min(grid[i + 1]?.[j] !== undefined ? grid[i + 1][j] : Number.MAX_SAFE_INTEGER, grid[i][j + 1] !== undefined ? grid[i][j + 1] : Number.MAX_SAFE_INTEGER) + grid[i][j]
        }
    }

    return grid[0][0]
};

console.log(minPathSum([[1,2,3],[4,5,6]]))