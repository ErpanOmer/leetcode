// 执行用时：68 ms
// 内存消耗：35.4 MB

var maxProfit = function(prices) {
  let length = prices.length
  let o = 0

  while (length > 1) {
    o += Math.max(prices[--length] - prices[length - 1], 0)
  }

  return o
};

console.log(maxProfit([7,6,4,3,1]))
