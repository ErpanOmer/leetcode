import { ArrayToTree, TreeToArray } from './common.js'


// BFS算法
var connect = function(root) {
    if (!root) {
        return root
    }

    const queue = [root]
    
    while(queue.length) {
        const length = queue.length
        let pre = null

        for (let i = 0; i < length; i++) {
            const node = queue.shift()

            node.left && queue.push(node.left)
            node.right && queue.push(node.right)

            if (pre) {
                pre.next = pre
            }

            pre = node
        }
    }

    return root
};


console.log((connect(ArrayToTree([1,2,3,4,5,null,7]))))