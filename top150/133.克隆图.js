import { ArrayToGraph } from './common.js'

var cloneGraph = function(node) {
    if (!node) {
        return node
    }

    const queue = [node]
    const map = new Map()
    map.set(node, new Node(node.val))

    while(queue.length) {
        const nod = queue.shift()
        const nodee = map.get(nod)

        for (const iterator of nod.neighbors) {
            let n = map.get(iterator)

            if (!n) {
                n = new Node(iterator.val)
                map.set(iterator, n)
                queue.push(iterator)
            }

            nodee.neighbors.push(n)
        }
    }

    return map.get(node)
};

console.log(cloneGraph(ArrayToGraph([[2,4],[1,3],[2,4],[1,3]])))