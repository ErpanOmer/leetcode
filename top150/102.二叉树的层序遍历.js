import { ArrayToTree } from './common.js'

var levelOrder = function(root) {
    const queue = [root]
    const array = []

    if (!root) {
        return array
    }

    while(queue.length) {
        let length = queue.length
        const arr = []

        while(length--) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

            arr.push(node.val)
            
            if (length === 0) {
                array.push(arr)
            }
        }
    }

    return array
};

console.log(levelOrder(ArrayToTree([3,9,20,null,null,15,7])))

