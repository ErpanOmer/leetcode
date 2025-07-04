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
 * @param {number} targetSum
 * @return {number}
 */

// 暴力法
// 时间复杂度: n * n
var pathSum = function (root, targetSum) {
    let count = 0

    const dfs = (root, sum = 0) => {
        if (!root) {
            return
        }

        sum = sum + root.val

        if (sum === targetSum) {
            count++
        }

        dfs(root.left, sum)
        dfs(root.right, sum)

        console.log(root.val)
    }

    const stack = []
     dfs(root)

    while (root || stack.length) {
        while (root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()
        root = root.right
    }


    return count
};

var pathSum = function (root, targetSum) {
    let count = 0
    const map = new Map([[0, 1]])

    const dfs = (root, prefixSum = 0) => {
        if (!root) {
            return
        }

        prefixSum += root.val
        
        console.log(prefixSum)

        if (map.has(prefixSum - targetSum)) {
            count += map.get(prefixSum - targetSum)
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
        dfs(root.left, prefixSum)
        dfs(root.right, prefixSum)
        map.set(prefixSum, map.get(prefixSum) - 1) // ← 回溯撤销当前路径
    }

    dfs(root)
    return count
};

console.log(pathSum(ArrayToTree([5, 3]), 8))