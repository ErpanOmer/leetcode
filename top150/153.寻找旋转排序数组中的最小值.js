/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0
    let j = nums.length - 1
    let min = nums[0]


    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m] >= nums[i]) {
            min = Math.min(min, nums[i])
            i = m + 1
        } else {
            min = Math.min(min, nums[m])
            j = m - 1
        }
    }

    return min
};

console.log(findMin([3,1,2]))