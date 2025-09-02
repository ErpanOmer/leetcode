/**
 * @param {number[]} nums
 * @return {number}
 */
// 思路:
// 中点比右边大 → 拐点在右边；
// 中点比右边小 → 拐点在左边。

var findMin = function(nums) {
    let i = 0
    let j = nums.length - 1

    while(i < j) {
        const m = Math.floor((i + j) / 2)

        if (m + 1 < nums.length && nums[m] > nums[m + 1]) {
            return nums[m + 1]
        }

        if (nums[m] > nums[j]) {
            i = m + 1
        } else {
            j = m
        }

    }

    return nums[i]
};


console.log(findMin([3,4,5,1,2]))