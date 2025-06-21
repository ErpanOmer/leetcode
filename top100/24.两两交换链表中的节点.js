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
 * @return {ListNode}
 */
var swapPairs = function(head) {
    let dummy = new ListNode(0, head)
    let current = head
    let prev = dummy

    while(current && current.next) {
        const next = current.next
        const nextnext = current.next.next

        current.next = nextnext
        prev.next = next
        next.next = current

        prev = current
        current = current.next
    }


    return dummy.next
};

console.log(LinkToArray(swapPairs(ArrayToLink([]))))