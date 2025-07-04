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
 * @param {number[]} postorder
 * @return {TreeNode}
 */
var constructFromPrePost = function (preorder, postorder) {
    const length = preorder.length
    const map = new Map()
    let index = 0

    for (let i = 0; i < postorder.length; i++) {
        map.set(postorder[i], i)        
    }


    const dfs = (i, j) => {
        if (i > j || index >= length) {
            return null
        }

        const val = preorder[index++]
        const node = new TreeNode(val)
        const idx = map.get(preorder[index])

        if (i === j) {
            return node
        }

        node.left = dfs(i, idx)
        node.right = dfs(idx + 1, j - 1)
        
        return node
    }


    return dfs(0, length - 1)
};

console.log(constructFromPrePost([1, 2, 4, 5, 3, 6, 7], [4, 5, 2, 6, 7, 3, 1]))