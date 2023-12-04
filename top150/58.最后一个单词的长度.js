/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s) {
    let length = s.length
    let hasKongge = false
    let string = 0

    while(length--) {
        if (s[length] !== ' ') {
            string++

            hasKongge = true
        }

        if (s[length] === ' ' && hasKongge) {
            break
        }
    }

    return string
};



// 测试用例
console.log(lengthOfLastWord("Hello World"))
console.log(lengthOfLastWord("   fly me   to   the moon  "))
console.log(lengthOfLastWord("a"))