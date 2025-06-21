import { ArrayToLink, LinkToArray, ListNode } from '../common.js'



/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let node = new ListNode()
    const h = node

    let s = 0

    while(l1 && l2) {
        let sum = l1.val + l2.val + s

        if (sum >= 10) {
            sum = sum % 10
            s = 1
        } else {
            s = 0
        }

        node = node.next = new ListNode(sum)
        l1 = l1.next
        l2 = l2.next
    }

    l1 = l1 || l2

    while(l1) {
        let sum = l1.val + s

        if (sum >= 10) {
            sum = sum % 10
            s = 1
        } else {
            s = 0
        }

        node = node.next = new ListNode(sum)
        l1 = l1.next
    }

    if (s > 0) {
        node = node.next = new ListNode(s)
    }

    return h.next
};


console.log(addTwoNumbers(ArrayToLink([2]), ArrayToLink([5,6,4])))
// console.log(LinkToArray(addTwoNumbers(ArrayToLink([9,9,9,9,9,9,9]), ArrayToLink([9,9,9,9]))))