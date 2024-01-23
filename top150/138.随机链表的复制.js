/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function(head) {
    function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    };

    const map = new WeakMap()
    let orginal = head

    while(orginal) {
        map.set(orginal, new Node(orginal.val, null))
        orginal = orginal.next
    }

    orginal = head

    while(orginal) {
        map.get(orginal).next = map.get(orginal.next)
        map.get(orginal).random = map.get(orginal.random)

        orginal = orginal.next
    }

    return map.get(head)
};

// map 映射
// 时间复杂度：O(n)
// 空间复杂度：O(n)


function ArrayToLink (arr = []) {
    function Node(val, next, random) {
        this.val = val;
        this.next = next;
        this.random = random;
    };

    let head = new Node()
    let prev = head

    for (const [val, random] of arr) {
        prev = prev.next = new Node(val, null, random)
    }

    return head.next
}

function LinkToArray (head) {
    let node = head
    const arr = []

    while(node) {
        arr.push([node.val, node.random])

        node = node.next
    }

    return arr
}

console.log((copyRandomList(ArrayToLink([[7,null],[13,0],[11,4],[10,2],[1,0]]))))