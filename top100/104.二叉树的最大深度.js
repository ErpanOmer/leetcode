import { TreeNode, ArrayToTree } from '../common.js'

/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number}
 */

// 递归
var maxDepth = function(root) {
    let max = Number.MIN_SAFE_INTEGER

    if (!root) {
        return 0
    }

    const dfs = (node, height = 1) => {
        if (!node) {
            return
        }

        max = Math.max(height, max)
        dfs(node.left, height + 1)
        dfs(node.right, height + 1)
    }

    dfs(root)

    return max
};


console.log(maxDepth(ArrayToTree([3,9,20,null,null,15,7])))