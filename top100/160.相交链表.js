import { ArrayToLink } from '../common.js'

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */


// 算是暴力吧
// 时间: m + n
// 空间: MAX(m, n)
var getIntersectionNode = function(headA, headB) {
    console.log(headA)
    console.log(headB)

    const set = new Set()

    while(headA) {
        set.add(headA)
        headA = headA.next
    }

    while(headB) {
        if (set.has(headB)) {
            return headB
        }

        headB = headB.next
    }


    return null
};



// 时间：m + n
// 空间: 1
// https://pic.leetcode.cn/1729473968-TLOxoH-lc160-3-c.png
var getIntersectionNode = function(headA, headB) {
    let a = headA
    let b = headB

    while(a !== b) {
        a = a ? a.next : headB
        b = b ? b.next : headA
    }

    return a
};

console.log(getIntersectionNode(ArrayToLink([4,1,8,4,5]), ArrayToLink([5,6,1,8,4,5])))