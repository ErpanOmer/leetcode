/**
 * @param {number[]} citations
 * @return {number}
 */
var hIndex = function(citations) {

    for (let i = 0; i < citations.length; i++) {
        for (let j = i + 1; j < citations.length; j++){
            if (citations[i] > citations[j]) {
                const temp = citations[i]
                citations[i] = citations[j]
                citations[j] = temp
            }
        }
    }

    return citations[Math.floor(citations.length / 2)]
};


console.log(hIndex([3,0,6,1,5]))
console.log(hIndex([1,3,1]))