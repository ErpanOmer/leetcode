/**
 * @param {number[][]} envelopes
 * @return {number}
 */

// 暴力破解 回溯 + 记忆化搜索
var maxEnvelopes = function(envelopes) {
    let max = Number.MIN_SAFE_INTEGER
    let map = new Map()

    const dfs = (i, j, count = 0) => {
        if (map.has(`${i}-${j}`)) {
            return map.get(`${i}-${j}`)
        }

        const c = count

        for (const e of envelopes) {
            if (e[0] < i && e[1] < j) {
                count = Math.max(dfs(e[0], e[1], c), count)
            }
        }

        return map.set(`${i}-${j}`, count + 1).get(`${i}-${j}`)
    }

    for (const e of envelopes) {
        max = Math.max(dfs(e[0], e[1]), max)
    }

    return max
};


var maxEnvelopes = function(envelopes) {
    envelopes = envelopes.sort((a, b) => a[0] !== b[0] ? a[0] - b[0] : b[1] - a[1])
    const top = []

    console.log(envelopes)

    for (const e of envelopes) {
        let i = 0
        let j = top.length

        while(i < j) {
            const m = (i + j) >> 1

            if (e[1] > top[m]) {
                i = m + 1
            } else {
                j = m
            }
        }

        top[i] = e[1]

        console.log(i, j, top, e[1])
    }

    return top.length
};




console.log(maxEnvelopes([[1,1],[1,2],[1,3],[1,4]]))