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
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head) {
        return false
    }

    let low = head
    let fast = head.next

    if (!fast) {
        return false
    }


    while(fast && fast.next) {
        if (low === fast) {
            return true
        }

        low = low.next
        fast = fast.next.next
    }

    return false
};


console.log(hasCycle(ArrayToLink([3,2,0,-4])))