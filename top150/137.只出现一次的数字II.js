/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
    console.log(nums)
    let sum = 0

    for (const n of nums) {
        sum ^= n
    }
    console.log(sum)

    sum = 0

    for (const n of nums) {
        sum += n
    }

    console.log(sum)
};

console.log(singleNumber([0,1,0,1,0,1,99]))


