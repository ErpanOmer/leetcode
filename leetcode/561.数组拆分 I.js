// 执行用时：132 ms
// 内存消耗：39 MB

var arrayPairSum = function(nums) {
  nums = nums.sort((a, b) => a - b)
  let length = nums.length
  let sum = 0

  while (length > 1) {
    sum += nums[length -= 2]
  }

  return sum
};

console.log(arrayPairSum([-470, 66, -4835, -5623]))
