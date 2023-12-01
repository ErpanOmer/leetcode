/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function(ratings) {
    let length = ratings.length
    let tang = Array(length).fill(1)
    let sum = 0

    for (let i = 1; i < length; i++) {
        if (ratings[i - 1] < ratings[i]) {
            tang[i] = tang[i - 1] + 1
        }
    }

    while(--length) {
        if (ratings[length - 1] > ratings[length]) {
            tang[length - 1] = Math.max(tang[length - 1], tang[length] + 1)
        }

        sum += tang[length]
    }

    sum += tang[0]

    return sum
};


// 贪心算法

console.log(candy([1,0,2]))
console.log(candy([1,2,2]))
console.log(candy([2, 3, 4, 5, 5, 7]))
console.log(candy([1,2,87,87,87,2,1]))