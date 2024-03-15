import { ArrayToTree } from './common.js'

var rightSideView = function(root) {
    if (!root) {
        return root
    }

    const queue = [root]
    const array = []

    while(queue.length) {
        let length = queue.length

        while(length--) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)
            
            if (length === 0) {
                array.push(node.val)
            }
        }
    }

    return array
};

console.log(rightSideView(ArrayToTree([])))

