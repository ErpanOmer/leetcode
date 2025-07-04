import { ArrayToLink, LinkToArray, ListNode } from '../common.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function(head) {
    if (!head || !head.next) {
        return null
    }

    let slow = head
    let fast = head

    while (fast && fast.next) {
        slow = slow.next
        fast = fast.next.next

        if (slow === fast) {
            break;
        }
    }

    fast = head

    while(slow && fast) {
        if (slow === fast) {
            return slow
        }

        fast = fast.next
        slow = slow.next
    }

    return null
};


console.log(detectCycle(ArrayToLink([3,2,0,-4])))