/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    let sum = 0

    for (const n of nums) {
        sum ^= n
    }

    return sum
};

console.log(singleNumber([2,2,1]))