import { ArrayToTree } from './common.js'

var getMinimumDifference = function(root) {
    let min = Number.MAX_SAFE_INTEGER
    let pre = -1

    const dfs = node => {
        if (!node) {
            return null
        }

        dfs(node.left)

        if (pre !== -1) {
            min = Math.min(node.val - pre, min)
        }

        pre = node.val

        dfs(node.right)

        return node
    }

    dfs(root)

    return min
};

console.log(getMinimumDifference(ArrayToTree([1,null,3,2])))