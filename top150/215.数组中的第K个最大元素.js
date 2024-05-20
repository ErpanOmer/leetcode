/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */


// 桶排序 解法
var findKthLargest = function(nums, k) {
    const tong = new Array()

    for (const n of nums) {
        tong[n + 10000] = tong[n + 10000] ? tong[n + 10000] + 1 : 1
    }

    let length = tong.length

    while(length--) {
        k = k - (tong[length] || 0)

        if (k <= 0) {
            return length - 10000
        }
    }
};

// 快速排序 解法
var findKthLargest = function(nums, k) {
    const quickSort = (left, right) => {
        if (left === right) {
            return nums[k - 1]
        }

        let i = left
        let j = right

        while(i < j) {
            while(i < j && nums[j] <= nums[left]) {
                j--
            }

            while(i < j && nums[i] >= nums[left]) {
                i++
            }

            if (i < j) {
                const t = nums[i]
                nums[i] = nums[j]
                nums[j] = t
            }
        }

        const t = nums[i]
        nums[i] = nums[left]
        nums[left] = t

        if (i >= k) {
            return quickSort(left, i)
        }

        return quickSort(i + 1, right)
    }

    return quickSort(0, nums.length - 1)
};



// 快速排序 解法(三路快排)
var findKthLargest = function(nums, k) {
    const quickSort = (nums, k) => {
        const m = Math.floor(Math.random() * nums.length)
        const small = []
        const big = []

        for (const n of nums) {
            if (n > nums[m]) {
                big.push(n)
            }

            if (n < nums[m]) {
                small.push(n)
            }
        }

        if (k <= big.length) {
            return quickSort(big, k)
        }

        if (nums.length - small.length < k) {
            return quickSort(small, k - (nums.length - small.length))
        }

        return nums[m]
    }

    return quickSort(nums, k)
};

console.log(findKthLargest([3,2,1,5,6,4], 1))