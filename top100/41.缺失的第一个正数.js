/**
 * @param {number[]} nums
 * @return {number}
 */

// 暴力解法
// 时间: n, 空间n
var firstMissingPositive = function (nums) {
    const map = new Set()
    let min = Number.MAX_SAFE_INTEGER
    let max = Number.MIN_SAFE_INTEGER
    let result = 1

    for (const n of nums) {
        map.add(n)
        max = Math.max(max, n)
        min = Math.min(min, n)
    }

    if (min > 1) {
        return result
    }

    while (map.has(result) && result <= max) {
        result++
    }

    return result
};

// 折腾版本
// 时间: nlogn
// 空间: 1
var firstMissingPositive = function (nums) {
    let result = 1

    nums.sort((a, b) => a - b)

    for (let i = 0; i < nums.length; i++) {
        if (nums[i] < 1 || nums[i] === nums[i + 1]) {
            continue
        }

        if (nums[i] !== result) {
            return result
        }

        result++
    }

    return result
};



// 最优解，元素替换
// 空间: 1
// 时间: 2n

var firstMissingPositive = function (nums) {
    const n = nums.length

    for (let i = 0; i < n; i++) {
        while (nums[i] > 0 && nums[i] <= n && nums[nums[i] - 1] !== nums[i]) {
            const t = nums[nums[i] - 1]
            nums[nums[i] - 1] = nums[i]
            nums[i] = t
        }
    }

    for (let i = 0; i < n; i++) {
        if (nums[i] !== i + 1) {
            return i + 1
        }
    }


    return n + 1
}

console.log(firstMissingPositive([[2147483647]]))