/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
    const rusult = []
    const numbers = nums.sort((a, b) => a - b)

    for (let i = 0; i < numbers.length - 2 && numbers[i] <= 0; i++) {
        if (i > 0 && (numbers[i - 1] === numbers[i])) {
            continue
        }

        let j = i + 1
        let k = numbers.length - 1

        while (j < k) {
            const t = numbers[i] + numbers[j] + numbers[k]

            if ((t === 0)) {
                rusult.push([numbers[i], numbers[j], numbers[k]])

                while (j < k && numbers[k] === numbers[--k]) {}
                while (j < k && numbers[j] === numbers[++j]) {}
            } else if (t > 0) {
                while (j < k && numbers[k] === numbers[--k]) {}
            } else {
                while (j < k && numbers[j] === numbers[++j]) {}
            }
        }
    }

    return rusult
};


console.log(threeSum([-1, 0, 1, 2, -1, -4]))
console.log(threeSum([0, 0, 0]))