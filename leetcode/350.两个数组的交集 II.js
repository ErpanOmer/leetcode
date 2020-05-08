// 执行用时：96 ms
// 内存消耗：34.9 MB

var intersect = function(nums1, nums2) {
  let length = nums1.length
  const arr = []

  while (length--) {
    const index = nums2.findIndex(i => nums1[length] === i)
    if (index > -1) {
      arr.push(nums2.splice(index, 1)[0])
    }
  }

  return arr
};

console.log(intersect([1,2,2,1], [2]))
