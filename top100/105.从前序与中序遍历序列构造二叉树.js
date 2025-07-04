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
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */
var buildTree = function(preorder, inorder) {
    let preorderIndex = 0
    const map = new Map()

    for (let i = 0; i < inorder.length; i++) {
        map.set(inorder[i], i)        
    }

    const dfs = (i, j) => {
        if (i > j) {
            return null
        }

        const val = preorder[preorderIndex++]
        const middle = map.get(val)
        
        return new TreeNode(val, dfs(i, middle - 1), dfs(middle + 1, j))
    }


    return dfs(0, preorder.length - 1)
};

console.log(buildTree([1, 2, 3], [3, 2, 1]))