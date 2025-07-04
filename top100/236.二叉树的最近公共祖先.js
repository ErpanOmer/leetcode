import {
    TreeNode,
    ArrayToTree
} from '../common.js'

/**
 * Definition for a binary tree root.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */

// 暴力法，超时 🤯
var lowestCommonAncestor = function(root, p, q) {
    const dfs = (root, target, depth = 0) => {
        if (!root) {
            return -1
        }
        
        return root.val === target.val ? depth : Math.max(dfs(root.left, target, depth + 1), dfs(root.right, target, depth + 1))
    }

    let min = Number.MAX_SAFE_INTEGER
    let ans = root
    const stack = []
    while (root || stack.length) {
        while (root) {
            stack.push(root)

            const pp = dfs(root, p)
            const qq = dfs(root, q)

            if (qq >= 0 && pp >= 0 && (qq + pp) < min) {
                min = qq + pp
                ans = root
            }

            root = root.left
        }

        root = stack.pop()
        root = root.right
    }

    return ans
};


// 也算暴力
var lowestCommonAncestor = function(root, p, q) {
    const map = new Map()
    const nodes = new Map()

    const dfs = (root, arr = []) => {
        if (!root) {
            return arr
        }

        arr = arr.concat([root.val])

        map.set(root.val, arr)
        nodes.set(root.val, root)

        dfs(root.left, arr)
        dfs(root.right, arr)
    }

    dfs(root)

    let pp = map.get(p.val)
    let qq = map.get(q.val)
    let ans = nodes.get(root.val)

    while(pp.length && qq.length) {
        const node1 = pp.shift()
        const node2 = qq.shift()

        if (node1 === node2) {
            ans = nodes.get(node1)
        }
    }

    return ans
}

var lowestCommonAncestor = function(root, p, q) {
    const dfs = (root) => {
        if (!root || root === p || root === q) {
            return root
        }

        const l = dfs(root.left)
        const r = dfs(root.right)

        if (l && r) {
            return root
        }

        return l || r
    }

    return dfs(root)
}


console.log(lowestCommonAncestor(ArrayToTree([3,5,1,6,2,0,8,null,null,7,4]), ArrayToTree([8]), ArrayToTree([8])))