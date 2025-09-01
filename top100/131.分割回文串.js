/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []
    let path = []
    let n = s.length

    // 普通检查
    const fn = (i, j) => {
        while(i < j) {
            if (s[i++] !== s[j--]) {
                return false
            }
        }

        return true
    }

    const dp = Array.from({ length: n }, () => Array(n).fill(false))

    // dp优化
    for (let i = n - 1; i >= 0; i--) {
        for (let j = i; j < n; j++) {
            if (s[i] === s[j]) {
                if (j - i <= 2) {
                    dp[i][j] = true
                } else {
                    dp[i][j] = dp[i + 1][j - 1]
                }
            }
        }
    }

    const dfs = (start = 0) => {
        if (start === s.length) {
            return res.push([...path])
        }

        for (let i = start; i < s.length; i++) {
            if (dp[start][i]) {
                path.push(s.slice(start, i + 1))
                dfs(i + 1)
                path.pop()
            }
        }
    }


    dfs()

    return res
};


console.log(partition('aab'))