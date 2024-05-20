
var MedianFinder = function() {
    this.arr = []
};

/** 
 * @param {number} num
 * @return {void}
 */
MedianFinder.prototype.addNum = function(num) {

/**
 * @return {number}
 */
MedianFinder.prototype.findMedian = function() {
};


const mf = new MedianFinder()
mf.addNum(1)
mf.addNum(2)

console.log(mf.findMedian())
mf.addNum(3)
console.log(mf.findMedian())