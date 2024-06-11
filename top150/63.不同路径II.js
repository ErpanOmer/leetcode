/**
 * @param {number[][]} obstacleGrid
 * @return {number}
 */

// 递归 + 记忆化搜索
var uniquePathsWithObstacles = function(obstacleGrid) {
    const map = new Map()

    const dfs = (i = 0, j = 0, count = 0) => {
        if (i >= obstacleGrid.length || j >= obstacleGrid[i].length || obstacleGrid[i][j] === 1) {
            return count
        }

        if (i === obstacleGrid.length - 1 && j === obstacleGrid[i].length - 1) {
            return ++count
        }

        if (map.has(`${i}-${j}`)) {
            return map.get(`${i}-${j}`)
        }

        return map.set(`${i}-${j}`, dfs(i + 1, j, count) + dfs(i, j + 1, count)).get(`${i}-${j}`)
    }


    return dfs()
};


// dp ? 原地修改

var uniquePathsWithObstacles = function(obstacleGrid) {
    const m = obstacleGrid.length
    const n = obstacleGrid[m - 1].length

    // 如果起点或终点是障碍物，则路径数量为0，直接返回
    if (obstacleGrid[0][0] === 1 || obstacleGrid[m - 1][n - 1] === 1) {
        return 0
    }

    obstacleGrid[0][0] =  1 - obstacleGrid[0][0]

    for (let i = 1; i < m; i++) {
        obstacleGrid[i][0] = obstacleGrid[i][0] === 1 || obstacleGrid[i - 1][0] === 0 ? 0 : 1
    }

    for (let j = 1; j < n; j++) {
        obstacleGrid[0][j] = obstacleGrid[0][j] === 1 || obstacleGrid[0][j - 1] === 0 ? 0 : 1 
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            obstacleGrid[i][j] = obstacleGrid[i][j] === 0 ? obstacleGrid[i][j - 1] + obstacleGrid[i - 1][j] : 0
        }
    }

    return obstacleGrid[m - 1][n - 1]
};

console.log(uniquePathsWithObstacles([[0,1],[0,0]]))