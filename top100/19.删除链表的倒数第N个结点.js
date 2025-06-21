import { ArrayToLink, LinkToArray, ListNode } from '../common.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    let dummy = new ListNode(0, head)
    let fast  = head
    let low = dummy

    while(n--) {
        fast = fast.next
    }

    while(fast) {
        low = low.next
        fast = fast.next
    }

    low.next = low.next.next
    
    return dummy.next
};

console.log(LinkToArray(removeNthFromEnd(ArrayToLink([1]), 1)))