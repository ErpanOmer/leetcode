// 执行用时：116 ms
// 内存消耗：34.7 MB

var twoSum = function(nums, target) {
  let length = nums.length

  while(length--) {
    const pop = nums.pop()
    for (let i = 0; i < length; i++) {
      if (pop + nums[i] === target) {
        return [i, length]
      }
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9))
