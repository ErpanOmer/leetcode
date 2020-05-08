// 执行用时：108 ms
// 内存消耗：38.1 MB

var containsDuplicate = function(nums) {
  nums.sort((a, b) => a - b)

  for (let i = 0; i < nums.length - 1; i++) {
    if (nums[i] === nums[i + 1]) {
      return true
    }
  }

  return false
};

console.log(containsDuplicate([1, 2, 3, 1]))
