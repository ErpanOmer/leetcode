
var RandomizedSet = function() {
    this.map = new Map()
    this.list = []

    return null
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.insert = function(val) {
    if (!this.map.has(val)) {
        const index = this.list.length

        this.map.set(val, index)
        this.list.push(val)
        
        return true
    }

    return false
};

/** 
 * @param {number} val
 * @return {boolean}
 */
RandomizedSet.prototype.remove = function(val) {
    if (this.map.has(val)) {
        const index = this.map.get(val)
        const length = this.list.length
        const last = this.list[length - 1]

        this.list[index] = last
        this.map.set(last, index)

        this.list.pop()
        this.map.delete(val)
        
        return true
    }

    return false
};

/**
 * @return {number}
 */
RandomizedSet.prototype.getRandom = function() {
    return this.list[Math.floor(Math.random() * this.list.length)]
};

/**
 * Your RandomizedSet object will be instantiated and called as such:
 * var obj = new RandomizedSet()
 * var param_1 = obj.insert(val)
 * var param_2 = obj.remove(val)
 * var param_3 = obj.getRandom()
 */


const randomizedSet = new RandomizedSet();
console.log(randomizedSet.insert(1))
console.log(randomizedSet.remove(2))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())
console.log(randomizedSet.remove(1))
console.log(randomizedSet.insert(2))
console.log(randomizedSet.getRandom())