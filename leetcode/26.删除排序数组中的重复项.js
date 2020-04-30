// 执行用时：92 ms
// 内存消耗：37.3 MB

var removeDuplicates = function(nums) {
  let length = nums.length

  while(length--) {
    if (nums[length] === nums[length - 1]) {
      nums.splice(length, 1)
      length++
    }
  }

  return nums.length
};

console.log(removeDuplicates([0, 0, 0, 1,1,1,2,2,3,3,4]))
