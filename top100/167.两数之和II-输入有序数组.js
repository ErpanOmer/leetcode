/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(numbers, target) {
    let i = 0
    let j = numbers.length - 1

    while(i < j) {
        const t = numbers[i] + numbers[j] 

        if (t === target) {
            return [i + 1, j + 1]
        }

        if (t > target) {
            j--
        } else {
            i++
        }
    }

};


console.log(twoSum([2,7,11,15], 22))
console.log(twoSum([-1,0], -1))
console.log(twoSum([2,3,4], 6))