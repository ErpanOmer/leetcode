import { ArrayToTree, TreeToArray } from './common.js'


var invertTree = function(root) {
    if (root === null) {
        return root
    }

    const left = root.left
    root.left = invertTree(root.right)
    root.right = invertTree(left)

    return root
};


console.log(TreeToArray(invertTree(ArrayToTree([1, 2, 3]))))