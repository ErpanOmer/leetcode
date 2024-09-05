/**
 * @param {string} s1
 * @param {string} s2
 * @param {string} s3
 * @return {boolean}
 */

// 暴力搜索 + 记忆化搜索
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false
    }

    let dp = []
    let set = new Set()
    
    const dfs = (i1 = 0, i2 = 0, i = 0) => {
        if (set.has(`${i1}-${i2}`)) {
            return
        }

        if (i >= s3.length) {
            return
        }
        
        set.add(`${i1}-${i2}`)

        if (i1 < s1.length && s1[i1] === s3[i]) {
            dp[i] = true
            dfs(i1 + 1, i2, i + 1)
        }

        if (i2 < s2.length && s2[i2] === s3[i]) {
            dp[i] = true
            dfs(i1, i2 + 1, i + 1)
        }

        return dp[i] = dp[i] || false
    }

    dfs();

    while(dp.length && !dp.pop()) {
        return false
    };

    return true
}


// dfs 优化
var isInterleave = function(s1, s2, s3) {
    if (s1.length + s2.length !== s3.length) {
        return false
    }

    const map = new Map()

    const dfs = (i = 0, j = 0) => {
        if (map.has(`${i}-${j}`)) {
            return map.get(`${i}-${j}`)
        }

        if (i + j >= s3.length) {
            return true
        }

        let boolean = false

        if (i < s1.length && s1[i] === s3[i + j]) {
            boolean = dfs(i + 1, j)
        }

        if (j < s2.length && s2[j] === s3[i + j]) {
            boolean = boolean || dfs(i, j + 1)
        }

        return map.set(`${i}-${j}`, boolean).get(`${i}-${j}`)
    }

    return dfs()
}


// dp




console.log(isInterleave("aabcc", "dbbca", "aadbbbaccc"))