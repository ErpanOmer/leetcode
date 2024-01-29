import { ArrayToLink, LinkToArray, ListNode } from './common.js'


var rotateRight = function(head, k) {
    if (k === 0 || !head || !head.next) {
        return head
    }

    const dummy = new ListNode(101, head)
    let last = dummy
    let current = dummy.next
    let length = 0

    while(current) {
        if (!current.next) {
            last = current
        }

        current = current.next
        length++
    }

    k = k % length

    if (k === 0) {
        return dummy.next
    }

    current = dummy.next
    last.next = dummy.next

    for (let i = 1; i < length - k; i++) {
        current = current.next
    }

    dummy.next = current.next
    current.next = null

    return dummy.next
};

console.log(LinkToArray(rotateRight(ArrayToLink([1,2,3,4,5]), 2)))