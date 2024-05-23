/**
 * @param {number[]} digits
 * @return {number[]}
 */
var plusOne = function(digits) {
    let length = digits.length

    while(length--) {
        digits[length] = (digits[length] + 1) % 10

        console.log(digits[length])

        if (digits[length] !== 0) {
            return digits
        }

    }

    digits.unshift(1)
    return digits
};

console.log(plusOne([1, 2, 9]))