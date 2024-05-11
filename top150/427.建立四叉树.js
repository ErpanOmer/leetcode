function Node(val,isLeaf,topLeft,topRight,bottomLeft,bottomRight) {
        this.val = val;
        this.isLeaf = isLeaf;
        this.topLeft = topLeft;
        this.topRight = topRight;
        this.bottomLeft = bottomLeft;
        this.bottomRight = bottomRight;
};


var construct = function(grid) {
    const isLeaf = (x1, x2, y1, y2) => {
        const t = grid[x1][y1]

        while(x1 < x2) {
            let temp = y1
            while(temp < y2) {
                if (grid[x1][temp] !== t) {
                    return false
                }
                
                temp++
            }

            x1++
        }

        return true
    }

    const dfs = (x1, x2, y1, y2) => {
        if (isLeaf(x1, x2, y1, y2)) {
            return new Node(grid[x1][y1], true, null, null, null, null)
        }
        
        const xm = (x1 + x2) / 2
        const ym = (y1 + y2) / 2

        console.log(xm, ym)

        return new Node(grid[x1][y1], false, dfs(x1, xm, y1, ym), dfs(x1, xm, ym, y2), dfs(xm, x2, y1, ym), dfs(xm, x2, ym, y2))
    }


    return dfs(0, grid.length, 0, grid.length)
};


console.log(construct([[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,0,1,1,1,1],[1,1,1,1,1,1,1,1],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0],[1,1,1,1,0,0,0,0]]))