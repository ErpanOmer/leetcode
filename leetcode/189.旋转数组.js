// 执行用时：80 ms
// 内存消耗：35.2 MB

var rotate = function(nums, k) {
  return nums.unshift(...nums.splice(nums.length - k, k)) && nums
};
// [5,6,1,2,3,4]

console.log(rotate([0, 1,2, 3, 4 , 5 , 6], 4))
