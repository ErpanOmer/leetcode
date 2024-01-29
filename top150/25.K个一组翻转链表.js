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
var reverseKGroup = function(head, k) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    let prev = dummy

    let i = 1
    let temp = dummy.next
    while(temp) {
        if (i === k) {
            const current = prev.next
            let jj = 0

            while(++jj < k) {
                const next = current.next
                current.next = current.next.next
                next.next = prev.next
                prev.next = next
            }

            prev = current
            temp = current.next
            i = 1
        } else {
            temp = temp.next
            i++
        }
    }


    return dummy.next
};


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

console.log(LinkToArray(reverseKGroup(ArrayToLink([1,2,3,4,5,6]), 2)))