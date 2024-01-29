/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} left
 * @param {number} right
 * @return {ListNode}
 */
var reverseBetween = function(head, left, right) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    let pre = dummy
    let current = dummy.next

    for (let i = 1; i < right; i++) {
        if (i < left) {
            pre = pre.next
            current = current.next
         } else {
            const right = current.next

            current.next = current.next.next

            right.next = pre.next

            pre.next = right

         }


    }

    return dummy.next
};



// 链表头插算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

function reverse (head) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    let pre = dummy
    let current = dummy.next

    while(current.next) {
        const next = current.next
        current.next = current.next.next

        next.next = pre.next
        pre.next = next
    }

    return dummy.next
}

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

function LinkToArray (head) {
    let node = head
    const arr = []

    while(node) {
        arr.push(node.val)

        node = node.next
    }

    return arr
}

console.log(LinkToArray(reverseBetween(ArrayToLink([5]), 1)))
// console.log(LinkToArray(reverse(ArrayToLink([1, 2, 3, 4, 5]))))