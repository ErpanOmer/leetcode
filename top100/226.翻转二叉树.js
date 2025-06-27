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
 * @return {TreeNode}
 */
var invertTree = function (root) {
    if (!root) {
        return null
    }

    const right = root.right
    const left = root.left
    root.left = invertTree(right)
    root.right = invertTree(left)

    return root
};

console.log(invertTree(ArrayToTree([4, 2, 7, 1, 3, 6, 9])))