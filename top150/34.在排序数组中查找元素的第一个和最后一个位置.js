/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function(nums, target) {
    let i = 0
    let j = nums.length

    while(i <= j) {
        let m = Math.floor((i + j) / 2)

        if (nums[m] === target) {
            let l = m
            let r = m

            while(nums[--l] === target) {
            }

            while(nums[++r] === target) {
            }

            return [++l, --r]
        }

        if (target > nums[m]) {
            i = m + 1
        } else {
            j = m - 1
        }
    }

    return [-1, -1]
};


console.log(searchRange([5,7,7,8,8,10], 8))