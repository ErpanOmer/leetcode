import { ArrayToTree } from './common.js'

var lowestCommonAncestor = function(root, p, q) {
    if (!root || root === p || root === q) {
        return root
    }

    const left = lowestCommonAncestor(root.left, p, q)
    const right = lowestCommonAncestor(root.right, p, q)

    if (left && right) {
        return root
    }

    return left || right
};

console.log(lowestCommonAncestor(ArrayToTree([3,5,1,6,2,0,8,null,null,7,4])))