/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    let pre = dummy
    let current = dummy.next
    let i = 0

    while(current && current.next) {
        if (current.val === current.next.val) {
            pre.next = current.next.next

            i++
        } else {
            if (i === 0) {
                pre = pre.next = current
            }

            i = 0
        }

        current = current.next
    }

    return dummy.next
};

// 双指针+基数
// 时间复杂度：O(n)
// 空间复杂度：O(1)


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

console.log(LinkToArray(deleteDuplicates(ArrayToLink([1,2,2,2]))))