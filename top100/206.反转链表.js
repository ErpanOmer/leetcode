import { ArrayToLink, LinkToArray, ListNode } from '../common.js'

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

// 空间: 1
// 时间: n
// 递归法
var reverseList = function(head) {
    let p = new ListNode()
    const h = p

    const fn = head => {
        if (!head) {
            return h.next
        }

        fn(head.next)

        p = p.next = new ListNode(head.val)

        return h.next
    }
    

    return fn(head)
};

// 空间: n
// 时间 2n
// 遍历法
var reverseList = function(head) {
    let node = new ListNode()
    let n = node
    let h = head
    const stack = []

    while(h) {
        stack.push(h.val)

        h = h.next
    }

    let length = stack.length

    while(length--) {
        node = node.next = new ListNode(stack[length])
    }

    return n.next
};

// 空间: 1
// 时间: n
// 突然来灵感了 🙂
// 借助前缀节点，遍历
var reverseList = function(head) {
    let prev = null

    while(head) {
        prev = new ListNode(head.val, prev)
        head = head.next
    }


    return prev
};

// 不创建节点
var reverseList = function(head) {
    let prev = null

    while(head) {
        const next = head.next
        head.next = prev
        prev = head
        head = next
    }


    return prev
};


console.log(LinkToArray(reverseList(ArrayToLink([1,2,3,4,5]))))