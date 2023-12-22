/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function(intervals, newInterval) {
    if (!intervals.length) {
        return [newInterval]
    }
    
    for (let i = 0; i < intervals.length + 1; i++) {
        if (!intervals[i] || newInterval[0] < intervals[i][0]) {
            intervals.splice(i, 0 , newInterval)
            break;
        }
        
    }

    const arr = []
    let i = -1

    while(++i < intervals.length) {
        let start = intervals[i][0]
        let end = intervals[i][1]

        while(intervals[i + 1] && end >= intervals[i + 1][0]) {
            end = Math.max(end, intervals[i + 1][1])
            i++
        }

        arr.push([start, end])
    }


    return arr
};


// 分段循环
// 时间复杂度：O(n)
// 空间复杂度：O(1)

console.log(insert([[1,3],[6,9]], [2, 5]))