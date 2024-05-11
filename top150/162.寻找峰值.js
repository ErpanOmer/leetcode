/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let i = 0
    let j = nums.length

    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m + 1] > nums[m]) {
                i = m + 1
            } else {
                j = m - 1
            }

    }

    return i
};

console.log(findPeakElement([1,3,2,1]))