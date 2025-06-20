import { ArrayToLink, LinkToArray, ListNode } from '../common.js'

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
    let node = new ListNode()
    const p = node

    while (list1 && list2) {
        if (list1.val > list2.val) {
            node = node.next = list2
            list2 = list2.next
        } else {
            node = node.next = list1
            list1 = list1.next
        }
    }

    node.next = list1 || list2

    return p.next
};


console.log(LinkToArray(mergeTwoLists(ArrayToLink([1,2,4]), ArrayToLink([1, 3, 4]))))