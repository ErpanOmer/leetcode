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
 * @param {ListNode[]} lists
 * @return {ListNode}
 */

// 普通遍历 合并有序链表
// 空间：1
// 时间：nlogn 甚至更好

var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }

    const merge = (list1, list2) => {
        const d = new ListNode()
        let cur = d

        while (list1 && list2) {
            if (list1.val > list2.val) {
                cur.next = list2
                list2 = list2.next
            } else {
                cur.next = list1
                list1 = list1.next
            }

            cur = cur.next
        }

        cur.next = list1 || list2

        return d.next
    }

    let current = null

    for (let i = 0; i < lists.length; i++) {
        if (lists[i]) {
            current = merge(current, lists[i])
        }
    }

    return current
};


// 归并递归解法
// 时间： nlogk
// 空间:  logk

var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }

    const merge = (list1, list2) => {
        const d = new ListNode()
        let cur = d

        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1
                list1 = list1.next
            } else {
                cur.next = list2
                list2 = list2.next
            }


            cur = cur.next
        }

        cur.next = list1 || list2

        return d.next
    }

    const devide = (i, j) => {
        if (i > j) {
            return null
        }

        if (i === j) {
            return lists[i]
        }

        const middle = Math.floor((i + j) / 2)

        return merge(devide(i, middle), devide(middle + 1, j))
    }

    return devide(0, lists.length - 1)
};


// 归并迭代解法
// 时间：nlogk
// 空间: 1

var mergeKLists = function (lists) {
    if (lists.length === 0) {
        return null
    }

    const merge = (list1, list2) => {
        const d = new ListNode()
        let cur = d

        while (list1 && list2) {
            if (list1.val < list2.val) {
                cur.next = list1
                list1 = list1.next
            } else {
                cur.next = list2
                list2 = list2.next
            }


            cur = cur.next
        }

        cur.next = list1 || list2

        return d.next
    }

    // 核心代码
    for (let step = 1; step < lists.length; step *= 2) {
        for (let i = 0; i < lists.length - step; i += step * 2) {
            lists[i] = merge(lists[i], lists[i + step])
        }
    }

    return lists[0]
};


console.log(LinkToArray(mergeKLists([ArrayToLink([1]), ArrayToLink([1]), ArrayToLink([-1]), ArrayToLink([]), ArrayToLink([-1])])))