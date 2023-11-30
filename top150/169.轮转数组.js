/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */
var rotate = function(nums, k) {
    k = k % nums.length

    if (k === 0) {
        return nums
    }

     const fn = (nums = [], start = 0, end = 0) => {
        while(start < end) {
            const temp = nums[start]
            nums[start++] = nums[end]
            nums[end--] = temp
        }
     }

     fn(nums, 0, nums.length - 1)
     fn(nums, 0, k - 1)
     fn(nums, k, nums.length - 1)

    return nums
};


// 时间复杂度：O(n)
// 空间复杂度：O(1)


// 测试用例
console.log(rotate([1,2,3,4,5,6,7], 3))
console.log(rotate([-1,-100,3,99], 2))