import { LinkToArray } from './common.js'




/**
 * @param {number} capacity
 */
var LRUCache = function(capacity) {
    function ListNode(key, val, prev, next) {
        this.key = (key === undefined ? 0 : key)
        this.val = (val === undefined ? 0 : val)
        this.prev = (prev === undefined ? null : prev)
        this.next = (next === undefined ? null : next)
    }

    this.size = capacity
    this.map = new Map()
    this.link = new ListNode(-1, -1, null, null)
    this.last = this.link
};

/** 
 * @param {number} key
 * @return {number}
 */
LRUCache.prototype.get = function(key) {
    if (this.map.has(key)) {
        console.log('befor', LinkToArray(this.link.next))

        const node = this.map.get(key)
        const prev = node.prev
        const next = node.next

        prev.next = next
        
        if (next) {
            next.prev = prev
        }

        node.prev = this.last
        this.last = node
        node.next = null

        console.log(LinkToArray(this.link.next))

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
    function ListNode(key, val, prev, next) {
        this.key = (key === undefined ? 0 : key)
        this.val = (val === undefined ? 0 : val)
        this.prev = (prev === undefined ? null : prev)
        this.next = (next === undefined ? null : next)
    }

    if (this.map.has(key)) {
        const node = this.map.get(key)
        const prev = node.prev
        const next = node.next

        prev.next = next
        
        if (next) {
            next.prev = prev
        }

        node.prev = this.last
        this.last = node
        node.next = null

        node.val = value
    } else {
        const node = new ListNode(key, value, this.last, null)
        this.last = this.last.next = node
        this.map.set(key, node)
    }


    if (this.map.size > this.size) {
        const old = this.link.next

        console.log(old.val, old.next.val)

        this.link.next = old.next
        old.next = null
        old.prev = null
        this.map.delete(old.key)   
    }

    
};

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

