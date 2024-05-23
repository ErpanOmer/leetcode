/**
 * @param {number} left
 * @param {number} right
 * @return {number}
 */
var rangeBitwiseAnd = function(left, right) {
    while(left < right) {
        right = right & (right - 1)
    }

    return right
};

console.log(rangeBitwiseAnd(5, 5))