// 执行用时：80 ms
// 内存消耗：35.2 MB

var rotate = function(nums, k) {
  return nums.unshift(...nums.splice(nums.length - k, k)) && nums
};


//  递归遍历
var rotate = function(nums, k) {
  const length = nums.length
  let loop = length
  let temp
  let prev = length - 1

  const fn = loop => loop + k < length ? loop + k : (loop + k) % length

  while (loop--) {
    let next = fn(prev)
    console.log(prev, next)
    const current = temp || nums[prev]
    temp = nums[next]
    nums[next] = current
    prev = next
  }

  return nums
};

var minCount = function(coins) {
  return Math.ceil(coins.reduce((prev, item) => prev += item, 0) / 2)
};

console.log(minCount([2,3,10]))
// [5,6,1,2,3,4]

console.log(rotate([0, 1,2, 3, 4 , 5 , 6], 4))
