/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */

// 比较原始的做法，先找出k ,然后根据k 的偏移量，二分查找
var search = function (nums, target) {
    // console.log(nums)

    let i = 0
    let j = nums.length - 1

    while (i < j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m] === target) {
            return m
        }

        if (nums[m] > nums[j]) {
            i = m + 1
        } else {
            j = m
        }
    }

    let k = i
    i = 0
    j = nums.length - 1

    while(i <= j) {
        const m = Math.floor((i + j) / 2)
        const rm = (m + k) % nums.length

        if (nums[rm] === target) {
            return rm
        } else if (target > nums[rm]) {
            i = m + 1
        } else {
            j = m - 1
        }
    }


    return -1
};


// 升级版
var search = function (nums, target) {
    let i = 0
    let j = nums.length - 1


    while(i <= j) {
        const m = Math.floor((i + j) / 2)

        if (nums[m] === target) {
            return m
        }

        if (nums[m] >= nums[i]) {
            if (nums[i] <= target && target < nums[m]) {
                j = m - 1
            } else {
                i = m + 1
            }
        } else {
            if (nums[m] < target && target <= nums[j]) {
                i = m + 1
            } else {
                j = m - 1
            }
        }
    }

    return -1
}



console.log(search([3, 1], 1))