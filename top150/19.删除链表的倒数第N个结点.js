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
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    
    let pre = dummy
    let current = dummy.next

    for (let i = 0; current; i++) {
        if (i >= n) {
            pre = pre.next
        }

        current = current.next
    }

    pre.next = pre.next.next

    return dummy.next
};

// 数组转链表
function ArrayToLink (arr = []) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    let head = new ListNode()
    let prev = head

    for (const a of arr) {
        prev = prev.next = new ListNode(a)
    }

    return head.next
}

// 链表转数组
function LinkToArray (head) {
    let node = head
    const arr = []

    while(node) {
        arr.push(node.val)
        node = node.next
    }

    return arr
}


console.log(LinkToArray(removeNthFromEnd(ArrayToLink([1, 2]), 1)))