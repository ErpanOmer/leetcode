// 执行用时：96 ms
// 内存消耗：36.2 MB

var singleNumber = function(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 1; i < nums.length + 1; i = i + 2) {
    console.log(i)
    if (nums[i] !== nums[i - 1]) {
      return nums[i - 1]
    }
  }


console.log(singleNumber([4,1,2,1,2]))
