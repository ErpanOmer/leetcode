import { ListNode, ArrayToLink, LinkToArray } from './common.js'

var mergeKLists = function(lists) {
    const merge = (list1, list2) => {
        const dummy = new ListNode()
        let current = dummy

        while(list1 && list2) {
            if (list1.val < list2.val) {
                current = current.next = list1
                list1 = list1.next
            } else {
                current = current.next = list2
                list2 = list2.next
            }
        }

        current.next = list1 || list2

        return dummy.next
    }


    const split = (left, right) => {
        if (left >= right) {
            return lists[left]
        }


        const middle = Math.floor((left + right) / 2)

        return merge(split(left, middle), split(middle + 1, right))
    }

    return split(0, lists.length)
};


console.log(LinkToArray(mergeKLists([].map(ArrayToLink))))