import { ArrayToLink, LinkToArray, ListNode } from '../common.js'

/**
 * // Definition for a _Node.
 * function _Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {_Node} head
 * @return {_Node}
 */

// 非常容易想到的 map 解法
// 空间: n
// 时间: n
var copyRandomList = function(head) {
    const map = new Map()
    let current = head
    const dummy = new _Node(0)
    let pre = dummy

    while(current) {
        const node = new _Node(current.val, null, null)
        map.set(current, node)
        pre = pre.next = node
        current = current.next
    }

    current = head
    pre = dummy.next
    while(current) {
        pre.random = map.get(current.random) || null

        pre = pre.next
        current = current.next
    }

    return dummy.next
};

// 伪节点解法， 先造新结点到每个current 后面，然后 current.next.random = current.random.next， 最后 移除head节点，返回新节点
// 空间：1
// 时间: 3n => n
var copyRandomList = function(head) {
    const dummy = new _Node(0, head)
    let current = head

    while(current) {
        current.next = new _Node(current.val, current.next, null)
        current = current.next.next
    }

    current = head

    while(current) {
        if (current.random) {
            current.next.random = current.random.next
        }

        current = current.next.next
    }

    
    current = head
    let pre = dummy

    while(current) {
        const next = current.next
        const nextnext = current.next.next

        pre = pre.next = next
        current = current.next = nextnext
    }
    
    return dummy.next
};

console.log(LinkToArray(copyRandomList(ArrayToLink([1, 2, 3]))))