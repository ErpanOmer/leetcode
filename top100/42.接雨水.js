/**
 * @param {number[]} height
 * @return {number}
 */


// 单调栈
var trap = function(height) {
    let stack = [];
    let res = 0;
    for (let i = 0; i < height.length; i++) {
        while (stack.length && height[i] > height[stack[stack.length - 1]]) {
            let bottom = stack.pop();

            if (stack.length === 0) break;

            let left = stack[stack.length - 1];
            let width = i - left - 1;
            let minHeight = Math.min(height[i], height[left]) - height[bottom];

            res += width * minHeight;
        }
        stack.push(i);
    }

    return res;
};

// 双指针
var trap = function(height) {
    let sums = 0
    let left = 0
    let right = height.length - 1
    let leftMax = 0
    let rightMax = 0


    while(left < right) {
        if (height[left] < height[right]) {
            leftMax = Math.max(leftMax, height[left])

            sums += leftMax - height[left]

            left++
        } else {
            rightMax = Math.max(rightMax, height[right])

            sums += rightMax - height[right]

            right--
        }

        console.log(sums)
    }

    return sums
};




// console.log(trap([4, 2, 0, 3, 2, 5]))
console.log(trap([0, 1, 0, 2, 1, 0, 1, 3, 2, 1, 2, 1]))