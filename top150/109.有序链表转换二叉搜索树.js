import { ArrayToLink, ListNode, TreeNode } from "./common.js";

/**
 * @param {ListNode} head
 * @return {TreeNode}
 */
var sortedListToBST = function(head) {
    let length = 0
    let dummy = head

    while(dummy) {
        dummy = dummy.next
        length++
    }

    const dfs = (left, right) => {
        if (left > right) {
            return null
        }

        const middle = Math.floor((left + right) / 2)
        const l = dfs(left, middle - 1)
        const node = new TreeNode(head.val)

        node.left = l
        head = head.next

        node.right = dfs(middle + 1, right)

        return node
    }


    return dfs(0, length - 1)
};


console.log(sortedListToBST(ArrayToLink([-10,-3,0,5,9])))