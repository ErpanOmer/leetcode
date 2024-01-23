/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    let current1 = l1
    let current2 = l2
    let head = new ListNode()
    let prev = head
    let s = 0

    while(current1 || current2) {
        const value1 = current1 ? current1.val : 0
        const value2 = current2 ? current2.val : 0
        let sum = value1 + value2 + s
        s = sum > 9 ? 1 : 0

        prev = prev.next = new ListNode(sum % 10)

        current1 = current1 && current1.next
        current2 = current2 && current2?.next
    }

    if (s > 0) {
        prev.next = new ListNode(s)
    }

    return head.next
};

// 时间复杂度：O(max(m, n))
// 空间复杂度：O(1)


function ArrayToLink (arr = []) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    let head = null
    let prev = null

    for (const a of arr) {
        const node = new ListNode(a)

        if (prev) {
            prev = prev.next = node
        } else {
            head = prev = node
        }
    }

    return head
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

console.log(LinkToArray(addTwoNumbers(ArrayToLink([9, 9, 9, 9, 9, 9, 9]), ArrayToLink([9, 9, 9, 9]))))