
// https://pic.leetcode.cn/1696039105-PSyHej-146-3-c.png
// 不难，只是没有想到

function ListNode(val = 0, key = 0) {
    this.val = val
    this.key = key
    this.prev = null
    this.next = null
}

var LRUCache = function(capacity) {
    this.length = capacity
    this.map = new Map()
    this.currentLength = 0

    this.head = new ListNode()
    this.last = new ListNode()

    this.head.next = this.last
    this.last.prev = this.head
};

LRUCache.prototype._remove = function(node) {
    node.prev.next = node.next
    node.next.prev = node.prev
}

LRUCache.prototype._addToHead = function(node) {
    const next = this.head.next
    node.prev = this.head
    node.next = next
    this.head.next = node
    next.prev = node
}

LRUCache.prototype.get = function(key) {
    if (!this.map.has(key)) return -1

    const node = this.map.get(key)
    this._remove(node)
    this._addToHead(node)

    return node.val
}

LRUCache.prototype.put = function(key, value) {
    if (this.map.has(key)) {
        const node = this.map.get(key)
        node.val = value
        this._remove(node)
        this._addToHead(node)
    } else {
        const node = new ListNode(value, key)
        this.map.set(key, node)
        this._addToHead(node)
        this.currentLength++

        if (this.currentLength > this.length) {
            const tail = this.last.prev
            this._remove(tail)
            this.map.delete(tail.key)
            this.currentLength--
        }
    }
}



const cache = new LRUCache(2)

cache.put(1, 1)
cache.put(2, 2)

console.log(cache.get(1))
cache.put(3, 3)
console.log(cache.get(2))
cache.put(4, 4)
console.log(cache.get(1))
console.log(cache.get(3))
console.log(cache.get(4))