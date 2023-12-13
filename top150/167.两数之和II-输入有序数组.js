/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {

    // 二分查找，空间 O(1)，时间 O(nlogn)
    for (let i = 0; i < numbers.length; i++) {
        let ii = i + 1
        let jj = numbers.length - 1
        const t = target - numbers[i]

        while(ii <= jj) {
            const m = Math.floor((ii + jj) / 2)

            if (t === numbers[m]) {
                return [ii, m + 1]
            }

            if (t > numbers[m]) {
                ii = m + 1
            }

            if (t < numbers[m]) {
                jj = m - 1
            }
        }
    }

    // 双指针 空间 O(1)，时间 O(n)
    for (let i = 0, j = numbers.length - 1; i < j;) {
        const sum = numbers[i] + numbers[j]

        if (sum === target) {
            return [i + 1, j + 1]
        }

        if (sum < target) {
            i++
        } else {
            j--
        }
    }

    return [-1, -1]
};


console.log(twoSum([2,7,11,15], 9))
console.log(twoSum([2,3,4], 6))
console.log(twoSum([-1, 0], -1))
console.log(twoSum([5,25,75], 100))