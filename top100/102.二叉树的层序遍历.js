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
 * @return {number[][]}
 */
var levelOrder = function (root) {
    const result = []
    const queue = [root]

    if (!root) {
        return result
    }

    while (queue.length) {
        let length = queue.length
        const layer = []

        while (length--) {
            const node = queue.shift()
            layer.push(node.val)

            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }

        result.push(layer)
    }

    return result
};


console.log(levelOrder(ArrayToTree([])))