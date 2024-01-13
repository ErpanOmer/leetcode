
var MinStack = function() {
    this.stack = []
};

/** 
 * @param {number} val
 * @return {void}
 */
MinStack.prototype.push = function(val) {
    let min = Number.MAX_SAFE_INTEGER

    if (this.stack.length) {
        min = this.getMin()
    }

    this.stack.push({
        value: val,
        min: val < min ? val : min
    })
};

/**
 * @return {void}
 */
MinStack.prototype.pop = function() {
    this.stack.pop()
};

/**
 * @return {number}
 */
MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1].value
};

/**
 * @return {number}
 */
MinStack.prototype.getMin = function() {
    return this.stack[this.stack.length - 1].min
};


// 时间复杂度：O(1)
// 空间复杂度：O(n)

const minStack = new MinStack();
console.log(minStack.push(-2),
minStack.push(0),
minStack.push(-3),
minStack.getMin(),
minStack.pop(),
minStack.top(),
minStack.getMin())