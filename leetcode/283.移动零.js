// 执行用时：72 ms
// 内存消耗：36.7 MB

var moveZeroes = function(nums) {
  let length = nums.length

  while(length--) {
    if (nums[length] === 0) {
      nums.push(0)
      nums.splice(length, 1)
    }
  }

  return nums
};

console.log(moveZeroes([0,1,0,3,12]))
