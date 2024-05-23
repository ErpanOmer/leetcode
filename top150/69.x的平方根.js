/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function(n) {
    if (n < 2) {
        return n
    }

    let x = n / 2
    while(x * x - n >= 0.0001) {
        x = (x + n / x) / 2
    }

    return Math.floor(x)
}



console.log(mySqrt(2))