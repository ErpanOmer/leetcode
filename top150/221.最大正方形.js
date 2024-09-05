/**
 * @param {character[][]} matrix
 * @return {number}
 */


// 爆搜
var maximalSquare = function(matrix) {
    const m = matrix.length    
    const n = matrix[m - 1].length
    const dp = new Array(m + 1).fill().map(() => Array(n + 1).fill(0))

    dp[1][1] = Number(matrix[0][0])

    for (let i = 1; i < m; i++) {
        dp[i + 1][1] = Number(matrix[i][0]) + dp[i][1]
    }

    for (let j = 1; j < n; j++) {
        dp[1][j + 1] = Number(matrix[0][j]) + dp[1][j]  
    }

    for (let i = 1; i < m; i++) {
        for (let j = 1; j < n; j++) {
            dp[i + 1][j + 1] = Number(matrix[i][j]) + dp[i][j + 1] + dp[i + 1][j] - dp[i][j]
        }
    }

    let length = Math.min(m, n)

    while(length--) {
        let i = m - 1
        let count = 0

        while(i >= length) {
            let j = n - 1

            while(j >= length) {
                count = dp[i + 1][j + 1] - dp[i - length][j + 1] - dp[i + 1][j - length] + dp[i - length][j - length]
                if (((length + 1) * (length + 1)) === count) {
                    return count
                }
                j--
            }

            i--
        }
    }


    return 0
};


// dp
var maximalSquare = function(matrix) {
    const m = matrix.length    
    const n = matrix[m - 1].length
    const dp = matrix
    let max = 0

    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {
            if (matrix[i][j] === '1') {
                dp[i][j] = i === 0 || j === 0 ? 1 : Math.min(dp[i][j - 1], dp[i - 1][j] , dp[i - 1][j - 1]) + 1
            }

            max = Math.max(dp[i][j], max)
        }
    }

    return max * max
}



console.time(1)
console.log(maximalSquare([["0","0","0","0","0"],["1","0","0","0","0"],["0","0","0","0","0"],["0","0","0","0","0"]]))
console.timeEnd(1)