/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = []
    let path = []

    const fn = (i, j) => {
        while(i < j) {
            if (s[i++] !== s[j--]) {
                return false
            }
        }

        return true
    }

    const dfs = (start = 0) => {
        if (start === s.length) {
            return res.push([...path])
        }

        for (let i = start; i < s.length; i++) {
            if (fn(start, i)) {
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