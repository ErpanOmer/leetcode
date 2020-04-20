var removeElement = function(nums, val) {
  let length = nums.length
  while (length--) {
    if (nums[length] === val) {
      nums.splice(length, 1)
    }
  }

  return nums.length
};

console.log(removeElement([0,1,2,2,3,0,4,2], 2))
