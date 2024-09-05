/**
 * @param {string} word1
 * @param {string} word2
 * @return {number}
 */
// dp 
var minDistance = function(word1, word2) {
    const dp = Array(word1.length + 1).fill().map(() => Array(word2.length + 1).fill(0))

    for (let i = 1; i <= word1.length; i++) {
        dp[i][0] = i         
    }

    for (let j = 1; j <= word2.length; j++) {
        dp[0][j] = j         
    }

    for (let i = 1; i <= word1.length; i++) {
        for (let j = 1; j <= word2.length; j++) {
            const tp = dp[i - 1][j - 1]
            
            dp[i][j] = Math.min(dp[i - 1][j], dp[i][j - 1], word1[i - 1] === word2[j - 1] ? tp - 1 : tp) + 1
        }
    }

    console.log(dp)

    return dp[word1.length][word2.length]
}


// dfs 
var minDistance = function(word1, word2) {
    const map = new Map()

    const dfs = (i = 0, j = 0, count = 0) => {
        if (map.has(`${i}-${j}`)) {
            return map.get(`${i}-${j}`)
        }

        if (i >= word1.length || j >= word2.length) {
            return word1.length - i + word2.length - j
        }

        if (word1[i] === word2[j]) {
            return dfs(i + 1, j + 1, count)
        }

        return map.set(`${i}-${j}`, Math.min(dfs(i + 1, j, count), dfs(i, j + 1, count), dfs(i + 1, j + 1, count)) + 1).get(`${i}-${j}`)
    }

    return dfs()
}


console.log(minDistance("intention", "execution"))