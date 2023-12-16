/**
 * @param {character[][]} board
 * @return {boolean}
 */
var isValidSudoku = function(board) {
    const boxes = {};
    const rows = {}
    const columns = {}


    for (let i = 0; i < board.length; i++) {
        boxes[i] = {}
        rows[i] = {}
        columns[i] = {}
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            let boxIndex = parseInt((i/3)) * 3 + parseInt(j/3);

            if (board[i][j] !== '.') {
                if (boxes[boxIndex][board[i][j]] || rows[i][board[i][j]] || columns[j][board[i][j]]) {
                    return false
                }

                boxes[boxIndex][board[i][j]] = true
                rows[i][board[i][j]] = true
                columns[j][board[i][j]] = true
            }
        }
    }

    return true
};


console.log(isValidSudoku([["8","3",".",".","7",".",".",".","."],["6",".",".","1","9","5",".",".","."],[".","9","8",".",".",".",".","6","."],["8",".",".",".","6",".",".",".","3"],["4",".",".","8",".","3",".",".","1"],["7",".",".",".","2",".",".",".","6"],[".","6",".",".",".",".","2","8","."],[".",".",".","4","1","9",".",".","5"],[".",".",".",".","8",".",".","7","9"]]))