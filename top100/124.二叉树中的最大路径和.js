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

// 不知道为什么，解出来了
// 时间复杂度： n
// 空间复杂度: logn
var maxPathSum = function(root) {
    // console.log(root)
    let max = root.val
    const dsf = root => {
        if (!root) {
            return 0
        }

        let left = dsf(root.left)
        let right = dsf(root.right)
        max = Math.max(max, left + right + root.val)

        return Math.max(Math.max(left, right) + root.val, 0)
    }

    dsf(root)

    return max
};

// console.log(maxPathSum(ArrayToTree([1,-2,3])))
console.log(maxPathSum(ArrayToTree([-10,9,20,null,null,15,7])))
// console.log(maxPathSum(ArrayToTree([5,4,8,11,null,13,4,7,2,null,null,null,1])))
