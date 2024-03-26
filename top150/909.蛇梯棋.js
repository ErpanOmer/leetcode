var snakesAndLadders = function(board) {
    let start = 1
    let end = board.length * board.length

    const array = []
    const length = board.length
    let len1 = length

    while(len1--) {
        let len2 = length
        const isLeft = len1 % 2 === 1

        while(len2--) {
            array.push(board[len1][isLeft ? length - len2 - 1 : len2])
        }
    }

    // console.log(array)

    const queue = []
    const map = new Map()


    queue.push(1)
    map.set(1, 0)

    while(queue.length) {
        const q = queue.shift()
        const s = map.get(q)

        if (q === board.length * board.length) {
            return s - 1
        }

        for (let i = 1; i <= 6; i++) {
            let n = q + 1
            
            if (n <= 0 || n > board.length * board.length) {
                continue
            }

            if (array[n - 1] !== -1) {
                n = array[n - 1]
            }

            if (map.has(n)) {
                continue
            }

            map.set(n, s + 1)
            queue.push(n)
        }
    }

    return -1
};

console.log(snakesAndLadders([[-1,-1],[-1,3]]))