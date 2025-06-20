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
 * @return {boolean}
 */

// 暴力法
// 空间: n
// 时间: n + 2/n
var isPalindrome = function(head) {
    let h = []

    while(head) {
        h.push(head.val)
        head = head.next
    }

    for (let i = 0; i < Math.floor(h.length / 2); i++) {
        if (h[i] !== h[h.length - 1 - i]) {
            return false
        }        
    }

    return true
};


// 时间: n
// 空间: 1
// 先快慢指针快速找到中间点 + 基于慢指针生成翻转列表 + 翻转列表和慢指针继续对比

var isPalindrome = function(head) {
    let low = head
    let fast = head
    let prev = null

    while(fast && fast.next) {
        const nextnext = fast.next.next
        const next = low.next

        // low.next = prev
        // prev = low

        low = next
        fast = nextnext
    }

    console.log(head)

    if (fast) {
        low = low.next
    }

    while(low) {
        const next = low.next
        low.next = prev
        prev = low
        low = next
    }

    console.log(head)

    return true
};


console.log(isPalindrome(ArrayToLink([1, 2, 1])))