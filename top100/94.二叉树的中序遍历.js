import { TreeNode, ArrayToTree } from '../common.js'

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

// 用递归
var inorderTraversal = function(root) {
    const array = []

    const dfs = node => {
        if (!node) {
            return
        }

        dfs(node.left)
        array.push(node.val)
        dfs(node.right)
    }

    dfs(root)

    return array
};


// 迭代法
// 背吧 没办法😭
var inorderTraversal = function(root) {
    const result = []

    if (!root) {
        return result
    }

    const stack = []

    while(root || stack.length) {

        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        result.push(root.val)
        root = root.right
    }



    return result
 };

console.log(inorderTraversal(ArrayToTree([1,null,2,3])))