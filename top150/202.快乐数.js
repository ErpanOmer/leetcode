/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
    if (n === 1) {
        return true
    }

    const fn = n => {
        let ss = 0

        for (const s of String(n).split('')) {
            ss += s * s
        }

        return ss
    }

    let slow = n
    let fast = fn(n)

    while(slow !== fast) {
        if (fast === 1) {
            return true
        }

        slow = fn(slow)
        fast = fn(fn(fast))
    }

    return false
};


console.log(isHappy(18))