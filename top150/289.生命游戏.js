/**
 * @param {number[][]} board
 * @return {void} Do not return anything, modify board in-place instead.
 */
var gameOfLife = function(board) {
    const fn  = (x, y) => {
        let iMAx = x + 1 > board.length - 1 ? board.length : x + 2
        let jMAx = y + 1 > board[0].length - 1 ? board[0].length : y + 2
        let sum = 0

        for (let i = x - 1 < 0 ? 0 : x - 1;i < iMAx; i++) {
            for (let j = y - 1 < 0 ? 0 : y - 1;j < jMAx; j++) {
                if (i === x && j === y) {
                    continue
                }

                if (board[i][j] === 2) {
                    sum += 0
                } else if (board[i][j] === -1) {
                    sum += 1
                } else {
                    sum += board[i][j]
                }
            }
        }

        return sum
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {            
            const sum = fn(i, j)

            if (board[i][j] === 1) {
                if (sum < 2) {
                    board[i][j] = -1
                }

                if (sum > 3) {
                    board[i][j] = -1
                }
            }

            if (board[i][j] === 0) {
                if (sum === 3) {
                    board[i][j] = 2
                }
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 2) {
                board[i][j] = 1
            }

            if (board[i][j] === -1) {
                board[i][j] = 0
            }
        }
    }

    return board
};


// 时间复杂度：O(m * n)
// 空间复杂度：O(1)

console.log(gameOfLife([[0,1,0],[0,0,1],[1,1,1],[0,0,0]]))
console.log(gameOfLife([[1,1],[1,0]]))