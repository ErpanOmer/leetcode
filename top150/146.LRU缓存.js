import { LinkToArray } from './common.js'




/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    this.size = capacity
    this.map = new Map()
    this.link = new LRUCache.ListNode(-1, -1, null, null)
    this.last = new LRUCache.ListNode(-2, -2, null, null)
    this.link.next = this.last
    this.last.prev = this.link
};

LRUCache.ListNode = function (key, val, prev, next) {
    this.key = key
    this.val = val
    this.prev = prev
    this.next = next
}

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.prev.next = node.next
        node.next && (node.next.prev = node.prev)

        node.next = this.link.next
        node.prev = this.link
        this.link.next.prev = node
        this.link.next = node        

        return node.val
    } else {
        return -1
    }
};

/** 
 * @param {number} key 
 * @param {number} value
 * @return {void}
 */
LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        this.get(key)
        node.val = value
    } else {
        const node = new LRUCache.ListNode(key, value, null, null)

        if (this.map.size >= this.size) {
            const prev = this.last.prev
            this.map.delete(prev.key)
            prev.prev.next = this.last
            this.last.prev = prev.prev
            prev.prev = prev.next = null
        }

        node.next = this.link.next
        node.prev = this.link
        this.link.next.prev = node
        this.link.next = node    

        this.map.set(key, node)
    }

    return null
};



// 哈希链表（LinkedHashMap）
// 时间复杂度：O(1)
// 空间复杂度：O(1)

const l = new LRUCache(3)
l.put(1, 1)
l.put(2, 2)
l.put(3, 3)
l.put(4, 4)
console.log(l.get(4))
console.log(l.get(3))
console.log(l.get(2))
console.log(l.get(1))
l.put(5, 5)
console.log(l.get(1))
console.log(l.get(2))
console.log(l.get(3))
console.log(l.get(4))
console.log(l.get(5))

