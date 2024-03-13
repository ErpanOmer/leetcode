import { ArrayToTree, ListNode } from './common.js'


var BSTIterator = function(root) {
    let minIndex = 0
    let min = Number.MAX_SAFE_INTEGER
    
    const fn = (node, array = []) => {
        if (!node) {
            return array
        }

        fn(node.left, array)
        array.push(node.val)

        if (node.val < min) {
            min = node.val
            minIndex = array.length - 1
        }

        fn(node.right, array)

        return array
    }

    this.array = fn(root, [])
    this.index = 0

    if (this.index !== minIndex) {
        this.array.splice(minIndex, 1)
        this.array.unshift(min)
    }
}
/**
 * @return {number}
 */
BSTIterator.prototype.next = function() {
    return this.array[this.index++]
};

/**
 * @return {boolean}
 */
BSTIterator.prototype.hasNext = function() {
    return this.array[this.index] !== undefined
};

const bSTIterator = new BSTIterator(ArrayToTree([41,37,44,24,39,42,48,1,35,38,40,null,43,46,49,0,2,30,36,null,null,null,null,null,null,45,47,null,null,null,null,null,4,29,32,null,null,null,null,null,null,3,9,26,null,31,34,null,null,7,11,25,27,null,null,33,null,6,8,10,16,null,null,null,28,null,null,5,null,null,null,null,null,15,19,null,null,null,null,12,null,18,20,null,13,17,null,null,22,null,14,null,null,21,23]))
// console.log(bSTIterator.next())
// console.log(bSTIterator.next())
console.log(bSTIterator.hasNext())
console.log(bSTIterator.next())
console.log(bSTIterator.hasNext())
// console.log(bSTIterator.next())
// console.log(bSTIterator.hasNext())
// console.log(bSTIterator.next())
// console.log(bSTIterator.hasNext())