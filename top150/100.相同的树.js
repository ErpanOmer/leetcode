import { ArrayToTree } from './common.js'


// BFS 解法
var isSameTree = function(p, q) {
    const queue1 = [p]
    const queue2 = [q]
    const array1 = []
    const array2 = []

    while(queue1.length) {
        const pp = queue1.shift()
    
        if (pp) {
            array1.push(pp.val)
            queue1.push(pp.left)
            queue1.push(pp.right)
        } else {
            array1.push(null)
        }
    }

    while(queue2.length) {
        const qq = queue2.shift()
    
        if (qq) {
            array2.push(qq.val)
            queue2.push(qq.left)
            queue2.push(qq.right)
        } else {
            array2.push(null)
        }
    }

    for (let i = 0; i < Math.max(array1.length, array2.length); i++) {
        if (array1[i] !== array2[i]) {
            return false
        }      
    }

    return true
};


// DFS 解法
var isSameTree = function(p, q) {
    if (p === null && q === null) {
        return true
    }

    if (p === null || q === null) {
        return false
    }

    if (p.val !== q.val) {
        return false
    }

    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right)
}

console.log(isSameTree(ArrayToTree([1, null, 3]), ArrayToTree([1,3])))