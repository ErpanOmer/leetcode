import { ArrayToTree } from './common.js'

var countNodes = function(root) {
    if (!root) {
        return 0
    }

    return countNodes(root.left) + countNodes(root.right) + 1
};


console.log(countNodes(ArrayToTree([1])))