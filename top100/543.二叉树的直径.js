import {
    TreeNode,
    ArrayToTree
} from '../common.js'


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
var diameterOfBinaryTree = function (root) {
    let max = 0

    const dfs = root => {
        if (!root) {
            return 0
        }

        const l = dfs(root.left)
        const r = dfs(root.right)

        max = Math.max(l + r, max)
        return Math.max(l, r) + 1
    }

    dfs(root)

    return max
};


console.log(diameterOfBinaryTree(ArrayToTree([4,-7,-3,null,null,-9,-3,9,-7,-4,null,6,null,-6,-6,null,null,0,6,5,null,9,null,null,-1,-4,null,null,null,-2])))