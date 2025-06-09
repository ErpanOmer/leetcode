/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */

// 枚举 N*N
var subarraySum = function (nums, k) {
    let count = 0
    let length = nums.length

    while (length--) {
        let i = length
        let sum = 0

        while (i > -1) {
            sum += nums[i]

            if (sum === k) {
                count++
            }

            i--
        }
    }


    return count
};


// 前缀和
var subarraySum = function (nums, k) {
    let count = 0
    let prefixSum = 0
    const map = new Map([[0, 1]])

    for (const n of nums) {
        prefixSum += n
        const p = prefixSum - k

        if (map.has(p)) {
            count += map.get(p)
        }

        map.set(prefixSum, (map.get(prefixSum) || 0) + 1)
    }


    return count
};


console.log(subarraySum([1, 1, 1], 2))
console.log(subarraySum([-1, -1, 1], 0))
console.log(subarraySum([1, 2, 3], 3))
console.log(subarraySum([1,-1,0], 0))