/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 两次循环  时间复杂度 2n
var moveZeroes = function (nums) {
    let index = 0

    for (const n of nums) {
        if (n !== 0) {
            nums[index++] = n
        }
    }

    for (let i = index; i < nums.length; i++) {
        nums[i] = 0        
    }

    return nums
};


// 一次循环  时间复杂度 n
var moveZeroes = function (nums) {
    const length = nums.length
    let left = 0
    let right = 0

    while(right < length) {
        if (nums[right] !== 0) {
            const t = nums[right]
            nums[right] = nums[left]
            nums[left++] = t
        }

        right++
    }

    return nums
};

console.log(moveZeroes([1, 0, 0, 3, 12]))