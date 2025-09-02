/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var searchInsert = function(nums, target) {
    let i = 0
    let j = nums.length - 1

    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m] === target) {
            return m
        } else if (target > nums[m]) {
            i = m + 1
        } else {
            j = m - 1
        }
    }

    return i
};


console.log(searchInsert([1,3,5,6], 4))