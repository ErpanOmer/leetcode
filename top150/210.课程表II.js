var findOrder = function(numCourses, prerequisites) {
    const map = new Map()
    const array = Array(numCourses).fill(0)

    for (let i = 0; i < prerequisites.length; i++) {
        array[prerequisites[i][0]]++
        const items = map.get(prerequisites[i][1])

        if (items) {
            items.push(prerequisites[i][0])
        } else {
            map.set(prerequisites[i][1], [prerequisites[i][0]])
        }
    }

    const queue = []

    for (let i = 0; i < array.length; i++) {
        if (array[i] === 0) {
            queue.push(i)
        }
    }

    const result = []

    while(queue.length) {
        const s = queue.shift()
        const ss = map.get(s)

        result.push(s)

        if (ss && ss.length) {
            for (let i = 0; i < ss.length; i++) {
                array[ss[i]]--

                if (array[ss[i]] === 0) {
                    queue.push(ss[i])
                }
                
            }
        }
    }


    return result.length > numCourses ? [] : result
};

console.log(findOrder(2, [[1, 0]]))