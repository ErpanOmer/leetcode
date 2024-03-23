import { ArrayToTree } from './common.js'

var isValidBST = function(root) {
    let pre = Number.MIN_SAFE_INTEGER
    const stack = []

    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()

        if (root.val < pre) {
            return false
        }

        pre = root.val
        root = root.right
    }

    return true
};


console.log(isValidBST(ArrayToTree([2,2,2])))