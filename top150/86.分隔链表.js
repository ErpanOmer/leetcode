import { ArrayToLink, LinkToArray, ListNode } from './common.js'

var partition = function(head, x) {
    const dummy = new ListNode(101, head)
    let prev = dummy
    let current = dummy.next

    let right = new ListNode()
    let rcurrent = right
    
    while(current) {
        if (current.val >= x) {
            prev.next = current.next
            rcurrent = rcurrent.next = current
        } else {
            prev = current
        }
        
        current = current.next
    }

    rcurrent.next = null
    prev.next = right.next
    return dummy.next
};


console.log(LinkToArray(partition(ArrayToLink([1,4,3,2,5,2]), 3)))
