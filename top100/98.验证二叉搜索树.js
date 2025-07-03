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
 * @return {boolean}
 */

// 中序遍历 + 数组遍历升序比较
var isValidBST = function(root) {
    const middle = []

    const dfs = root => {
        if (!root) {
            return
        }

        dfs(root.left)
        middle.push(root.val)
        dfs(root.right)
    }

    dfs(root)

    for (let i = 1; i < middle.length; i++) {
        if (middle[i] <= middle[i - 1]) {
            return false
        }
    }

    return true
};

// 不用递归法,用栈
var isValidBST = function(root) {
    const stack = []
    let temp = Number.MIN_SAFE_INTEGER

    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()

        if (temp >= root.val) {
            return false
        }

        temp = root.val
        root = root.right
    }

    return true
};


console.log(isValidBST(ArrayToTree([5,4,6,null,null,3,7])))