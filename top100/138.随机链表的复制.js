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