/**
 * @param {number[][]} triangle
 * @return {number}
 */

// 递归 + 记忆化搜索
var minimumTotal = function(triangle) {
    // const dp = Array(triangle.length).fill(Number.MAX_SAFE_INTEGER)
    const map =  new Map()

    const dfs = (row = 0, i = 0) => {
        if (map.has(`${row}-${i}`)) {
            return map.get(`${row}-${i}`)
        }

        if (row >= triangle.length) {
            return 0
        }

        if (i >= triangle[row].length) {
            return 0
        }
        
        const min = Math.min(dfs(row + 1, i) + triangle[row][i], dfs(row + 1, i + 1) + triangle[row][i])

        return map.set(`${row}-${i}`, min).get(`${row}-${i}`)
    }

    return dfs()
};

// dp ?
var minimumTotal = function(triangle) {
    let i = triangle.length
    const dp = []

    for (const t of triangle[--i]) {
        dp.push(t)
    }

    while(i--) {
        for (let j = 0; j < i + 1; j++) {
            dp[j] = Math.min(dp[j], dp[j + 1]) + triangle[i][j]
        }
    }

    return dp[0]
};


console.log(minimumTotal([[-1],[-1000,3],[1,-1,-100], [-10000, -1000, 0, 1000]]))