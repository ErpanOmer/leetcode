/**
 * @param {number[][]} points
 * @return {number}
 */
var maxPoints = function(points) {
    const length = points.length

    if (length < 3) {
        return length
    }

    let max = 2

    const fn = (a, b) => b === 0 ? a : fn(b, a % b)

    for (let i = 0; i < length; i++) {
        const map = new Map()
        let count = max

        for (let j = i + 1; j < length; j++) {
            const [x1, y1] = points[i]
            const [x2, y2] = points[j]

            const x = x1 - x2
            const y = y1 - y2
            const k = fn(x, y)
            const key = `${x / k}_${y / k}`

            map.set(key, (map.get(key) || 1) + 1)
            count = Math.max(count, map.get(key))
        }

        max = Math.max(count, max)
    }

    return max
};


console.log(maxPoints([[1,1],[3,2],[5,3],[4,1],[2,3],[1,4]]))