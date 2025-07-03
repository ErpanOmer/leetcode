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
 * @return {number[]}
 */
var rightSideView = function(root) {
    const result = []

    if (!root) {
        return result
    }

    const queue = [root]

    while(queue.length) {
        let len = queue.length
        result.push(queue[len - 1].val)

        while(len--) {

            const node = queue.shift()
            
            if (node.left) {
                queue.push(node.left)
            }

            if (node.right) {
                queue.push(node.right)
            }
        }
    }

    return result
};


console.log(rightSideView(ArrayToTree( [1,2,3,4,null,null,null,5])))