import { ArrayToTree } from "./common.js";

var isSymmetric = function(root) {
        // DFS 解法
    var isSameTree = function(p, q) {
        if (p === null && q === null) {
            return true
        }

        if (p === null || q === null) {
            return false
        }

        if (p.val !== q.val) {
            return false
        }

        return isSameTree(p.left, q.right) && isSameTree(p.right, q.left)
    }
    
    
    return isSameTree(root, root)
};

console.log(isSymmetric(ArrayToTree([1,2,2,null,3,null,3])))