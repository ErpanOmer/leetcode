/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let length = prices.length

    if (length < 2) {
        return 0
    }

    let diff = 0

    while(--length) {
        const d = prices[length] - prices[length - 1]
        diff += d > 0 ? d : 0

        console.log(prices[length - 1], prices[length])
    }

    return diff
};


// 弹性算法
// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([1,2,3,4,5]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([9,3,12,1,2,3]))