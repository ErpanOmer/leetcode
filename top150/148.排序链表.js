import { ArrayToLink, ListNode, LinkToArray } from './common.js'

var sortList = function (head) {
    if (!head || !head.next) {
        return head
    }

    let slow = head
    let fast = head.next

    while(fast && fast.next) {
        slow = slow.next
        fast = fast.next.next
    }

    let right = sortList(slow.next)
    slow.next = null
    let left = sortList(head)

    const dummy = new ListNode()
    let current = dummy

    while(left && right) {
        if (left.val < right.val) {
            current = current.next = left
            left = left.next
        } else {
            current = current.next = right
            right = right.next
        }
    }

    current.next = left || right

    return dummy.next
};


console.log(LinkToArray(sortList(ArrayToLink([4,19,14,5,-3,1,8,5,11,15]))))