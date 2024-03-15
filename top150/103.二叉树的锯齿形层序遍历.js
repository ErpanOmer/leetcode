import { ArrayToTree } from './common.js'

var zigzagLevelOrder = function(root) {
    const queue = [root]
    const array = []

    if (!root) {
        return array
    }

    while(queue.length) {
        let length = queue.length
        const arr = new Array(length)
        const isLeft = array.length % 2 === 0
        
        for (let i = 0; i < length; i++) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

            arr[isLeft ? i : length - i - 1] = node.val
        }

        array.push(arr)
    }

    return array
};

console.log(zigzagLevelOrder(ArrayToTree([3,9,20,null,null,15,7])))

