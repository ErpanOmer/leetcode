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

// 数组转树
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

// 树转数组
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

// 数组转图
export function ArrayToGraph (array) {
    function Node(val, neighbors) {
        this.val = val === undefined ? 0 : val;
        this.neighbors = neighbors === undefined ? [] : neighbors;
    }

    const map = new Map()
    for (let i = 0; i < array.length; i++) {
        map.set(i + 1, new Node(i + 1))
    }

    for (let i = 0; i < array.length; i++) {
        const node = map.get(i + 1)

        for (let j = 0; j < array[i].length; j++) {
            node.neighbors.push(map.get(array[i][j]))
        }
    }

    return map.get(1) || null
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


// 中序遍历 栈实现(DFS)
function DFSForStack (root) {
    const stack = []

    while(root || stack.length) {

        while(root) {
            stack.push(root)
            root = root.left
        }

        root = stack.pop()

        root = root.right
    }
}

// 中序遍历 递归实现(DFS)
function DFSForRecursion (root) {
    if (!root) {
        return null
    }

    DFSForRecursion(root.left)
    
    DFSForRecursion(root.right)
}