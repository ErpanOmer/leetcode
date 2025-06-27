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
 * @return {boolean}
 */
var isSymmetric = function (root) {
    const dfs = (left, right) => {
        if (left === null && right === null) {
            return true
        }

        if (left === null || right === null) {
            return false
        }

        return left.val === right.val && dfs(left.left, right.right) && dfs(left.right, right.left)
    }

    return dfs(root.left, root.right)
};

console.log(isSymmetric(ArrayToTree([1,2,2,3,4,4,3])))