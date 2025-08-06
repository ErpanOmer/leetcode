/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {boolean}
 */


// 学了一些 自己写出来，给自己点个赞🤭
var canFinish = function (numCourses, prerequisites) {
    const inner = Array(numCourses).fill(0)
    const map = new Map()
    const queue = []

    for (const [cur, dep] of prerequisites) {
        inner[cur]++

        if (map.has(dep)) {
            map.get(dep).push(cur)
        } else {
            map.set(dep, [cur])
        }
    }

    let count = 0
    for (let i = 0; i < inner.length; i++) {
        if (inner[i] === 0) {
            queue.push(i)
        }
    }


    while (queue.length) {
        const cur = queue.shift()
        count++

        const deps = map.get(cur)

        if (deps) {
            for (const dep of deps) {
                inner[dep]--

                if (inner[dep] === 0) {
                    queue.push(dep)
                }
            }
        }
    }

    return numCourses === count
};


console.log(canFinish(2, [
    [1, 0]
]))