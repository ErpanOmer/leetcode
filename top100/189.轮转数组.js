/**
 * @param {number[]} nums
 * @param {number} k
 * @return {void} Do not return anything, modify nums in-place instead.
 */

// 暴力法
// 空间复杂度：k
// 时间复杂度: n + k
var rotate = function (nums, k) {
    k = k % nums.length
    const temp = []


    let len = k
    while (len--) {
        temp.push(nums[nums.length - len - 1])
    }

    len = nums.length - k

    while (len--) {
        nums[len + k] = nums[len]
    }

    for (let i = 0; i < k; i++) {
        nums[i] = temp[i]
    }

    return nums
};


// 空间复杂度：k
// 时间复杂度: n
var rotate = function (nums, k) {
    k = k % nums.length
    let length = nums.length
    const temp = []

    while (length--) {
        if (length > nums.length - k - 1) {
            temp.push(nums[length])
        }

        nums[length] = length < k ? temp[k - length - 1] : nums[length - k]
    }


    return nums
};


// 空间复杂度：1
// 时间复杂度: 2n
var rotate = function (nums, k) {
    k = k % nums.length
    
    const reverse = (i, j) => {
        while(i < j) {
            const t = nums[i]
            nums[i++] = nums[j]
            nums[j--] = t
        }
    }

    reverse(0, nums.length - 1)
    reverse(0, k - 1)
    reverse(k, nums.length - 1)

    return nums
};


console.log(rotate([1, 2, 3, 4, 5, 6, 7], 2))