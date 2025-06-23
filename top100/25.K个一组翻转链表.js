import {
    ArrayToLink,
    LinkToArray,
    ListNode
} from '../common.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    const dummy = new ListNode(0, head)
    let prev = dummy

    while (head) {
        let fast = prev
        let low = head
        let len = k

        while(len--) {
            fast = fast.next

            if (!fast) {
                return dummy.next
            }
        }

        let pre = fast.next

        // 这里比较烧脑
        while(head && pre !== fast) {
            const next = head.next
            head.next = pre
            pre = head
            head = next
        }

        prev.next = pre
        prev = low
    }

    return dummy.next
};

console.log(LinkToArray(reverseKGroup(ArrayToLink([1, 2, 3, 4, 5, 6]), 3)))