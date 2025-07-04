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
 * @param {number[]} inorder
 * @param {number[]} postorder
 * @return {TreeNode}
 */

// 妈的，这完全是偶然 根 → 右 → 左
var buildTree = function(inorder, postorder) {
    const length = postorder.length
    const map = new Map()

    for (let i = 0; i < length; i++) {
        map.set(inorder[i], i)        
    }

    const dfs = (i, j) => {
        if (i > j) {
            return null
        }

        const val = postorder.pop()
        const middle = map.get(val)

        if (val === undefined) {
            return null
        }

        const node = new TreeNode(val)
        node.right = dfs(middle + 1, j) 
        node.left = dfs(i, middle - 1)

        return node
    }

    return dfs(0, length - 1)
};


console.log(buildTree([9,3,15,20,7],  [9,15,7,20,3]))