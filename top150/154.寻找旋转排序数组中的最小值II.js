/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    let i = 0
    let j = nums.length - 1
    let min = nums[i]

    while(i <= j) {
        const m = Math.floor((i + j) / 2)
        if (nums[i] < nums[m]) {
            min = Math.min(min, nums[i])
            i = m + 1
        } else if (nums[i] > nums[m]) {
            min = Math.min(min, nums[m])
            j = m - 1
        } else {
            min = Math.min(min, nums[i])
            i++
        }
 
    }


    return min
};

console.log(findMin([1, 3, 5]))