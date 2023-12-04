/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const length = s.length
    let sum = 0

    const map = {
        "I": 1,
        "V": 5,
        "X": 10,
        "L": 50,
        "C": 100,
        "D": 500,
        "M": 1000
    }

    for (let i = 0; i < length; i++) {
        let current = map[s[i]]
        let next = map[s[i + 1]]

        sum = next && next > current ? sum - current : sum + current
    }

    return sum
};


// 时间复杂度：O(n)
// 空间复杂度：O(1)

// 测试用例
console.log(romanToInt("III"))
console.log(romanToInt("IV"))
console.log(romanToInt("IX"))
console.log(romanToInt("LVIII"))
console.log(romanToInt("MCMXCIV"))
console.log(romanToInt("CMXCIX"))
console.log(romanToInt("XLIX"))