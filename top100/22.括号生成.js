/**
 * @param {number} n
 * @return {string[]}
 */

// 回溯算法 暴力版
var generateParenthesis = function (n) {
    const result = []
    let set = new Set()

    const valid = string => {
        let i = 0

        for (const s of string) {
            s === '(' ? i++ : i--

            if (i < 0 || i > n) {
                return false
            }
        }

        return i === 0
    }

    const backtrack = (index = 0, string = '', count = 0) => {
        if (string.length > 2 * n || string[0] === ')' || set.has(string) || count > n || count < 0) {
            return
        }

        set.add(string)

        if (string.length === 2 * n && string[string.length - 1] === '(') {
            return
        }

        if (string.length === 2 * n && valid(string)) {
            return result.push(string)
        }

        

        for (let i = index; i < n; i++) {
            backtrack(i, string + '(', count + 1)
            backtrack(i, string + ')', count - 1)
        }

    }

    backtrack()

    return result
};



// 回溯 优化版本 还差一点
var generateParenthesis = function (n) {
    const result = []

    const backtrack = (string = '', left = 0, right = 0) => {
        if (string.length === n * 2) {
            return result.push(string)
        }

        if (left < n) {
            backtrack(string + '(', left + 1, right)
        }

        if (right < left) {
            backtrack(string + ')', left, right + 1)
        }
    }

    backtrack()

    return result
};




console.log(generateParenthesis(3))