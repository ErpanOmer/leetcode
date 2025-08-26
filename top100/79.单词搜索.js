/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function (board, word) {
    const n = board.length
    const m = board[n - 1].length

    const backtrack = (i = 0, j = 0, index = 0) => {
        if (i < 0 || j < 0 || i >= n || j >= m || board[i][j] !== word[index]) {
            return false
        }

        if (index === word.length - 1) {
            return true
        }

        const temp = board[i][j]
        board[i][j] = '#'

        const bool = backtrack(i + 1, j, index + 1) || backtrack(i, j + 1, index + 1) || backtrack(i - 1, j, index + 1) || backtrack(i, j - 1, index + 1)
        
        board[i][j] = temp
        

        return bool
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (backtrack(i, j)) {
                return true
            }
        }
    }

    return false
};

console.log(exist([
    ["A", "B", "C", "E"],
    ["S", "F", "C", "S"],
    ["A", "D", "E", "E"]
], 'SEE'))