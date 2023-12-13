/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const fn = s => {
        return (s.charCodeAt() >= 48 && s.charCodeAt() <= 57) || (s.charCodeAt() >= 65 && s.charCodeAt() <= 90) || (s.charCodeAt() >= 97 && s.charCodeAt() <= 122)
    }

    for (let i = 0, j = s.length - 1; i < j;) {
        if (!fn(s[i])) {
            i++
            continue
        }

        if (!fn(s[j])) {
            j--
            continue
        }

        if (s[i].toLowerCase() !== s[j].toLowerCase()) {
            return false
        }

        i++
        j--
        
    }


    return true
};




// 时间复杂度：O(n)
// 空间复杂度：O(1)


console.log(isPalindrome('A man, a plan, a canal: Panama'))
console.log(isPalindrome('race a car'))
console.log(isPalindrome(' '))