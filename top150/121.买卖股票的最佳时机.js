/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let max = 0
    let cost = Number.MAX_SAFE_INTEGER

    for (let i = 0; i < prices.length; i++) {
        cost = Math.min(cost, prices[i])
        max = Math.max(max, prices[i] - cost)
    }

    return max
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(maxProfit([7,1,5,3,6,4]))
console.log(maxProfit([7,6,4,3,1]))
console.log(maxProfit([9,3,12,1,2,3]))