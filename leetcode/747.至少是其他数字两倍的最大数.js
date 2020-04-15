//  执行用时：68 ms
//  内存消耗：33.9 MB

var dominantIndex = function(nums) {
  const max = Math.max(...nums)

  for (let i = 0; i < nums.length; i++) {
    if (nums[i] === max) {
      continue
    }

    if ((nums[i] * 2) > max) {
      return -1
    }
  }

  return nums.findIndex(i => i === max)
}


//  执行用时：68 ms
//  内存消耗：33.9 MB

var dominantIndex = function(nums) {
  const max = Math.max(...nums)
  if (nums.some(item => (item !== max) && ((item * 2) > max))) {
    return -1
  }

  return nums.findIndex(i => i === max)
}

console.log(dominantIndex([3, 6, 1, 0]))
