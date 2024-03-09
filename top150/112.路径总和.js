import { ArrayToTree } from './common.js'


// DFS
var hasPathSum = function(root, targetSum) {
    if (!root) {
        return false
    }

    if (!root.left && !root.right) {
        return root.val === targetSum
    }

    return hasPathSum(root.left, targetSum - root.val) || hasPathSum(root.right,  targetSum - root.val)
};

console.log(hasPathSum(ArrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,1]), 22))