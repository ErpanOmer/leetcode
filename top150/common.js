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

// 链表结构
export function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}