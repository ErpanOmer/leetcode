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
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    const dfs = (i, j) => {
        if (i > j) {
            return null
        }

        const m = Math.floor((i + j) / 2)

        return new TreeNode(nums[m], dfs(i, m - 1), dfs(m + 1, j))
    }

    return dfs(0, nums.length - 1)
};

console.log(sortedArrayToBST([-10,-3,0,5,9]))