/**
 * @param {character[][]} grid
 * @return {number}
 */
var numIslands = function (grid) {
    const n = grid.length
    const m = grid[n - 1].length
    let count = 0

    const dfs = (i = 0, j = 0) => {
        if (i >= n || j >= m || i < 0 || j < 0 || grid[i][j] === '0') {
            return
        }

        grid[i][j] = '0'

        dfs(i, j + 1)
        dfs(i + 1, j)
        dfs(i - 1, j)
        dfs(i, j - 1)
    }

    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (grid[i][j]  === '1')  {
                dfs(i, j)
                count++
            }    
        }        
    }

    return count
};


console.log(numIslands([
    ["1", "1", "1", "1", "0"],
    ["1", "1", "0", "1", "0"],
    ["1", "1", "0", "0", "0"],
    ["0", "0", "0", "0", "0"]
]))