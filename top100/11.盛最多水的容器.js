/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    let left = 0
    let right = height.length - 1
    let max = 0

    while(left < right) {
        const min = Math.min(height[left], height[right])
        const area = min * (right - left)
        max = Math.max(max, area)

        height[left] < height[right] ? left++ : right--
    }

    return max
};


console.log(maxArea([1,8,6,2,5,4,8,3,7]))
console.log(maxArea([8,7,2,1]))