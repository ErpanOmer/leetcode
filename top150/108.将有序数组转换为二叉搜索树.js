import { TreeNode } from './common.js'


/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
var sortedArrayToBST = function(nums) {
    if (!nums.length) {
        return null
    }

    const middle = Math.floor(nums.length / 2)
    const node = new TreeNode(nums[middle])

    node.left = sortedArrayToBST(nums.slice(0, middle))
    node.right = sortedArrayToBST(nums.slice(middle + 1))

    return node
};


console.log(sortedArrayToBST([-10,-3,0,5,9]))