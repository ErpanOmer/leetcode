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
var hasCycle = function (head) {
    if (head === null || head.next === null) {
        return false;
    }

    let slow = head;
    let fast = head.next;

    while (slow != fast) {
        if (fast == null || fast.next == null) {
            return false;
        }

        slow = slow.next;
        fast = fast.next.next;
    }

    return true;
};

// 双指针算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(hasCycle([3, 2, 0, -4]))