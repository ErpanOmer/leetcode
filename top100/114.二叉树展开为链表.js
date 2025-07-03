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
 * @return {void} Do not return anything, modify root in-place instead.
 */

// 递归实现  右 → 左 → root
// 借助pre 节点
var flatten = function (root) {
    let prev = null

    const dfs = root => {
        if (!root) {
            return null
        }

        dfs(root.right)
        dfs(root.left)

        root.right = prev
        root.left = null
        prev = root

        return root
    }

    return dfs(root)
};


// 空间复杂度: 1
// 时间复杂度: n
var flatten = function(root) {
    while (root) {
        if (root.left) {
            let prev = root.left;
            while (prev.right) {
                prev = prev.right;
            }
            prev.right = root.right;
            root.right = root.left;
            root.left = null;
        }
        root = root.right;
    }
};


console.log(flatten(ArrayToTree([1, 2, 5, 3, 4, null, 6])))
/*
| 顺序类型      | 访问顺序      | 构造链表方式  | 结果             |
| --------- | --------- | ------- | -------------- |
| 前序遍历      | 根 → 左 → 右 | 正向接链表   | A → B → C      |
| 后序逆序（你写的） | 右 → 左 → 根 | 每次插链表头部 | A → B → C（倒出来） |
*/