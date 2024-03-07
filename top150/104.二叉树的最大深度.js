import { ArrayToTree } from './common.js'

var maxDepth = function(root) {
    return root ? Math.max(maxDepth(root.left), maxDepth(root.right)) + 1 : 0
};


console.log(maxDepth(ArrayToTree([3,9,20,null,null,15,7])))