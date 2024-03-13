import { ArrayToTree } from './common.js'

var maxPathSum = function(root) {
    let max = -1001

    const fn = node => {
        if (!node) {
            return 0
        }

        const left = fn(node.left)
        const right = fn(node.right)

        max = Math.max(max, node.val + left + right)
        
        return Math.max(Math.max(left, right) + node.val, 0)
    }

    fn(root)

    return max
};

console.log(maxPathSum(ArrayToTree([-10,9,20,null,null,15,7])))