import { ArrayToTree } from './common.js'

var kthSmallest = function(root, k) {
    const stack = []

    while(root || stack.length) {
        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()

        if (--k === 0) {
            return root.val
        }

        root = root.right
    } 
};

console.log(kthSmallest(ArrayToTree([5,3,6,2,4,null,null,1]), 3))