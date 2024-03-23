var canFinish = function(numCourses, prerequisites) {
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

    let count = 0

    // console.log(array)
    // console.log(map)
    // console.log(queue)

    while(queue.length) {
        const s = queue.shift()
        const ss = map.get(s)

        if (ss && ss.length) {
            for (let i = 0; i < ss.length; i++) {
                array[ss[i]]--

                if (array[ss[i]] === 0) {
                    queue.push(ss[i])
                }
                
            }
        }

        count++
    }


    return count === numCourses
};

console.log(canFinish(2, [[1,0]]))