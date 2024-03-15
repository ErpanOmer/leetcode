import { ArrayToTree } from './common.js'

var averageOfLevels = function(root) {
    const queue = [root]
    const array = []

    if (!root) {
        return array
    }

    while(queue.length) {
        let length = queue.length
        let len = length
        let sum = 0

        while(length--) {
            const node = queue.shift()
            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

            sum += node.val
            
            if (length === 0) {
                array.push(sum / len)
            }
        }
    }

    return array
};

console.log(averageOfLevels(ArrayToTree([3,9,20,15,7])))