/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */

// 暴力破解 N*N 超时
var maxSlidingWindow = function(nums, k) {
    const result = []

    for (let i = k - 1; i < nums.length; i++) {
        let j = i
        let max = nums[i] 
        let len = j - k + 1

        while(len < j--) {
            if (nums[j] > max) {
                max = nums[j]
            }
        }


        result.push(max)
    }

    return result
};

// 双向队列
// 比喻
// 这是一个降本增笑的故事：

// 如果新员工比老员工强（或者一样强），把老员工裁掉。（元素进入窗口）
// 如果老员工 35 岁了，也裁掉。（元素离开窗口）
// 裁员后，资历最老（最左边）的人就是最强的员工了。


var maxSlidingWindow = function(nums, k) {
    const deque = [] // 队列，存的是下标
    const result = []

    for (let i = 0; i < nums.length; i++) {
        // 踢掉队尾比当前小的
        while (deque.length && nums[i] >= nums[deque[deque.length - 1]]) {
            deque.pop()
        }

        // 当前元素进队
        deque.push(i)

        // 检查队首是否已滑出窗口
        if (deque[0] <= i - k) {
            deque.shift()
        }

        // 记录最大值（窗口满了才记录）
        if (i >= k - 1) {
            result.push(nums[deque[0]])
        }
    }

    return result
}


console.log(maxSlidingWindow([4, 2, 12, 3, 8, 9], 3))