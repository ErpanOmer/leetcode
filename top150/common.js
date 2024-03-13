
// 链表结构
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

export function TreeNode(val, left, right) {
    this.val = (val === undefined ? 0 : val)
    this.left = (left === undefined ? null : left)
    this.right = (right === undefined ? null : right)
}

// 链表反转算法
function reverseLink (head) {
    let pre = null
    let cur = head
    let nxt = head

    while(cur) {
        nxt = cur.next
        cur.next = pre
        pre = cur
        cur = nxt
    }

    return pre
}

// 链表反转算法(头插法)
function reverseLinkOfTop (head) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    const dummy = new ListNode(0, head)
    let pre = dummy
    let current = dummy.next

    while(current.next) {
        const next = current.next
        current.next = current.next.next

        next.next = pre.next
        pre.next = next
    }

    return dummy.next
}

// 数组转链表
export function ArrayToLink (arr = []) {
    function ListNode(val, next) {
        this.val = (val === undefined ? 0 : val)
        this.next = (next === undefined ? null : next)
    }

    let head = new ListNode()
    let prev = head

    for (const a of arr) {
        prev = prev.next = new ListNode(a)
    }

    return head.next
}

// 链表转数组
export function LinkToArray (head) {
    let node = head
    const arr = []

    while(node) {
        arr.push(node.val)
        node = node.next
    }

    return arr
}


export function ArrayToTree(array) {
    const length = array.length

    if (!length) {
        return null
    }

    const root = new TreeNode(array[0])
    const queue = [root]

    for (let i = 1; i < length;) {
        const node = queue.shift()

        if (array[i] !== null) {
            node.left = new TreeNode(array[i])
            queue.push(node.left)
        }

        i++

        if (i < length && array[i] !== null) {
            node.right = new TreeNode(array[i])
            queue.push(node.right)
        }

        i++
    }

    return root
}

export function TreeToArray(root) {
    const queue = [root]
    const array = []

    if (!root) {
        return array
    }

    while (queue.length) {
        const node = queue.shift()

        if (node) {
            array.push(node.val)

            if (node.left || node.right) {
                queue.push(node.left)
                queue.push(node.right)
            }

        } else {
            array.push(null)
        }
    }

    return array
}