/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function(n) {
    const result = []

    const dfs = (i = 0, j = 0, string = '') => {
        if (i > n || j > n || j > i) {
            return
        }

        if (i === n && j === n) {
            return result.push(string)
        }

        dfs(i + 1, j, string + '(')
        dfs(i, j + 1, string + ')')

        return result
    }


    return dfs()
};


console.log(generateParenthesis(3))