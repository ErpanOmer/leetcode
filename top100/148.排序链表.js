import {
    ArrayToLink,
    LinkToArray,
    ListNode
} from '../common.js'

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

// 归并排序 分治思路，先拆，然后合并
// 太复杂了😭
// 时间: nlogn
// 空间: logn

var sortList = function (head) {
    const merge = (a, b) => {
        const dummy = new ListNode()
        let current = dummy

        while (a && b) {
            if (a.val > b.val) {
                current = current.next = b
                b = b.next
            } else {
                current = current.next = a
                a = a.next
            }
        }

        current.next = a || b

        return dummy.next
    }

    const middle = a => {
        let low = a
        let fast = a
        let pre = a

        while (fast && fast.next) {
            pre = low
            low = low.next
            fast = fast.next.next
        }

        // 断开链接
        pre.next = null

        return low
    }

    const divide = node => {
        if (!node || !node.next) {
            return node
        }

        const m = middle(node)

        return merge(divide(node), divide(m))
    }

    return divide(head)
};


console.log(LinkToArray(sortList(ArrayToLink([4, 2, 1, 3]))))