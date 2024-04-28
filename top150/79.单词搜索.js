/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {
    const dfs = (i = 0, j = 0, index = 0) => {
        if (index === word.length) {
            return true
        }

        if (i < 0 || j < 0 || i > board.length - 1 || j > board[i].length - 1 || board[i][j] === '#' || board[i][j] !== word[index]) {
            return false
        }

        const str = board[i][j]
        board[i][j] = '#'
        
        const bool = dfs(i + 1, j, index + 1) || dfs(i - 1, j, index + 1) || dfs(i, j + 1, index + 1) || dfs(i, j - 1, index + 1)
        
        board[i][j] = str

        return bool
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === word[0] && dfs(i, j, 0)) {
                return true
            }
        }
    }

    return false
};

console.log(exist([['a', 'b']], "ba"))