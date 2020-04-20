// 执行用时：84 ms
// 内存消耗：37.8 MB

var findMaxConsecutiveOnes = function(nums) {
  let length = nums.length

  while (length--) {
    if (nums[length - 1] > 0) {
      nums[length - 1] = nums[length] + 1
    }
  }

  return nums.reduce((p, n) => p > n ? p : n)
};

console.log(findMaxConsecutiveOnes([1,1,0,1,1,1]))
