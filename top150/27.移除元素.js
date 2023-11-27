/**
 * @param {number[]} nums
 * @param {number} val
 * @return {number}
 */
var removeElement = function(nums, val) {
    let last = nums.length

    for (let i = 0; i < last;) {
        if (nums[i] === val) {
            nums[i] = nums[--last]
        } else {
            i++
        }
    }

    return last
};

// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(removeElement([3,2,2,3], 3))
console.log(removeElement([0,1,2,2,3,0,4,2], 2))
console.log(removeElement([1,1,1], 1))