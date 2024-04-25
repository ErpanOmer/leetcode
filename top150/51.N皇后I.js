/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function(n) {
    const string = Array(n).fill('.').map(() => Array(n).fill('.'))
    const array = []

    const dfs = (i = 0, column = new Set(), left = new Set(), right = new Set()) => {
        if (n === i) {
            return array.push(string.map(s => s.join('')))
        }


        for (let j = 0; j < n; j++) {
            if (column.has(j)) {
                continue
            }

            const l = i + j
            const r = i - j

            if (left.has(l) || right.has(r)) {
                continue
            }
            
            string[i][j] = 'Q'
            column.add(j)
            left.add(l)
            right.add(r)

            dfs(i + 1, column, left, right)

            string[i][j] = '.'
            column.delete(j)
            left.delete(l)
            right.delete(r)
        }



        return array.length
    }

    return dfs()
};


console.time('2')
console.log(solveNQueens(15))
console.timeEnd('2')