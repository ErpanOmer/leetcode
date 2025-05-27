/**
 * @param {number[]} nums
 * @return {number}
 */
var longestConsecutive = function (nums) {
    if (nums.length < 2) {
        return nums.length
    }

    let max = 1
    const set = new Set(nums)

    for (const s of set) {
        if (!set.has(s - 1)) {
            let length = 1

            while (set.has(s + length)) {
                length++
            }

            max = Math.max(length, max)
        }
    }

    return max
};


console.log(longestConsecutive([100, 4, 200, 1, 3, 2]))
console.log(longestConsecutive([0, 3, 7, 2, 5, 8, 4, 6, 0, 1]))
console.log(longestConsecutive([1, 0, 1, 2]))

console.log(longestConsecutive([9, 1, 4, 7, 3, -1, 0, 5, 8, -1, 6]))