/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

// 二分查找 但是，重复的元素明显是 线性的
var searchRange = function(nums, target) {
    // console.log(nums, target)

    let i = 0
    let j = nums.length - 1

    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (target === nums[m]) {
            const arr = [m, m]

            while(nums[arr[0] - 1] === target) {
                arr[0]--
            }

            while(nums[arr[1] + 1] === target) {
                arr[1]++
            }

            return arr
        } else if (target > nums[m]) {
            i = m + 1
        } else {
            j = m - 1
        }
    }


    return [-1, -1]
};


var searchRange = function(nums, target) {
    // console.log(nums, target)

    const fn = target => {
        let i = 0
        let j = nums.length

        while(i < j) {
            const m = Math.floor((i + j) / 2)

            if (target > nums[m]) {
                i = m + 1
            } else {
                j = m
            }
        }

        return i
    }

    const left = fn(target)

    if (left === nums.length || nums[left] !== target) {
        return [-1, -1]
    }

    const right = fn(target + 1) - 1
    return [left, right]
};


console.log(searchRange([5,7,7,8,8,10], 6))