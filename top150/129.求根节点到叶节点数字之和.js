import { ArrayToTree } from './common.js'

var sumNumbers = function(root, str = '') {
    if (root === null) {
        return 0
    }

    if (!root.right && !root.left) {
        return Number(str + root.val)
    }

    return sumNumbers(root.left, str + root.val) + sumNumbers(root.right, str + root.val)
};

console.log(sumNumbers(ArrayToTree([])))