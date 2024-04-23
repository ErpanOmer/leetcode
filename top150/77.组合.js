/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function(n, k) {
    const arrayy = []

    const fn = (index = 1, array = []) => {
        if (array.length === k) {
            return arrayy.push(array.slice())
        }

        const len = n - (k - array.length) + 1

        for (let i = index; i <= len; i++) {
            array.push(i)
            fn(i + 1, array)
            array.pop()
        }

        return arrayy
    }

    return fn()
};


console.log(combine(4, 2))