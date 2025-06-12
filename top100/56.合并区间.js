/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */

var merge = function (intervals) {
    let length = intervals.length;
    if (length <= 1) return intervals;

    intervals.sort((a, b) => a[0] - b[0]);

    let result = [];
    let i = 0

    while(i < length) {
        const current = intervals[i]

        while(intervals[i + 1] && current[1] >= intervals[i + 1][0]) {

            if (intervals[i + 1][1] > current[1]) {
                current[1] = intervals[i + 1][1]
            }

            i++
        }

        result.push(current)

        i++
    }

    return result
};


// 优化版本  也就快了 3ms
var merge = function (intervals) {
    intervals.sort((a, b) => a[0] - b[0]);
    let result = [intervals[0]];
    let index = 0

    for (let i = 1; i < intervals.length; i++) {
        if (result[index][1] >= intervals[i][0]) {
            result[index][1] = Math.max(intervals[i][1], result[index][1])
        } else {
            result.push(intervals[i])

            index++
        }
    }

    return result
};

console.log(merge([[1, 3],[2, 6],[8, 10],[15, 18]]));
console.log(merge([[1,4],[4,5]]))
console.log(merge([[1,4],[2,3]]))
console.log(merge([[2,3],[4,5],[6,7],[8,9],[1,10]]))