/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let i = 0
    let j = nums.length - 1

    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m] === target) {
            return m
        }
 
        if (nums[m] >= nums[i]) {

            if (target >= nums[i] && target < nums[m]) {
                j = m - 1
            } else {
                i = m + 1
            }


        } else {
            if (target > nums[m] && target <= nums[j]) {
                i = m + 1
            } else {
                j = m - 1
            }
        }
    }


    return -1
};

console.log(search([5,1,3], 3))