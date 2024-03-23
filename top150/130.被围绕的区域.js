var solve = function(board) {
    const dfs = (i, j) => {
        if (i < 0 || i >= board.length || j < 0 || j >= board[i].length || board[i][j] === 'B' || board[i][j] === 'X') {
            return
        }
 
        if (board[i][j] === 'O') {
            board[i][j] = 'B'
        }

        dfs(i - 1, j)
        dfs(i + 1, j)
        dfs(i, j - 1)
        dfs(i, j + 1)
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            const isEdge = i === 0 || j === 0 || i === board.length - 1 || j === board[i].length - 1
            if (isEdge && board[i][j] === 'O') {
                dfs(i, j)
            }
        }
    }

    for (let i = 0; i < board.length; i++) {
        for (let j = 0; j < board[i].length; j++) {
            if (board[i][j] === 'O') {
                board[i][j] = 'X'
            }

            if (board[i][j] === 'B') {
                board[i][j] = 'O'
            }
        }
    }

    return board
};

console.log(solve([
    ["O","X","X","O","X"],
    ["X","O","O","X","O"],
    ["X","O","X","O","X"],
    ["O","X","O","O","O"],
    ["X","X","O","X","O"]
]))