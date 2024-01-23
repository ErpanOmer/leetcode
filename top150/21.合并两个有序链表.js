/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }
    
    const head = new ListNode()
    let prev = head

    while(list1 && list2) {
         if (list1.val < list2.val) {
            prev = prev.next = list1
            list1 = list1.next
         } else {
            prev = prev.next = list2
            list2 = list2.next
         }
    }

    prev.next = list1 || list2

    return head.next
};

// 时间复杂度：O(m + n)
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

console.log(LinkToArray(mergeTwoLists(ArrayToLink([1, 4, 6]), ArrayToLink([1, 3, 4]))))