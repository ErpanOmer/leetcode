import { ArrayToTree, TreeNode } from './common.js'

var flatten = function(root) {
    let current = root

    while(current) {

        if (current.left) {
            let temp = current.left

            while(temp.right) {
                temp = temp.right
            }

            temp.right = current.right
            current.right = current.left
            current.left = null
        }

        current = current.right

    }
};

console.log(flatten(ArrayToTree([0])))

