/**
 * @param {number} num
 * @return {string}
 */
var intToRoman = function(num) {
    const arr1 = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1]
    const arr2 = ['M', "CM", "D", "CD", "C", "XC", "L", "XL", "X", "IX", "V", "IV", "I"]

    let string = ''
    
    for (let i = 0; i < arr1.length; i++) {
        while(num >= arr1[i]) {
            num -= arr1[i]
            string += arr2[i]
        }
        
    }

    return string
};


// 贪心算法
// 时间复杂度：O(1)
// 空间复杂度：O(1)

// 测试用例
console.log(intToRoman(3))
console.log(intToRoman(4))
console.log(intToRoman(9))
console.log(intToRoman(58))
console.log(intToRoman(1994))