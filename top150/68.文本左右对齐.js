/**
 * @param {string[]} words
 * @param {number} maxWidth
 * @return {string[]}
 */
var fullJustify = function(words, maxWidth) {
    const string = []

    let length = 0
    let space = 0
    let ii = 0

    const fn = (start, end, empty, gap) => {
        let spaceLen = Math.ceil(empty / (gap - 1))
        let str = ''

        for (let index = start; index < end; index++) {
            str += words[index] || ''

            let i = empty - spaceLen >= 0 ? spaceLen : empty

            while(i > 0) {
                str += ' '
                i--
            }

            empty -= spaceLen
        }

        string.push(str)
    }

    for (let i = 0; i < words.length; i++) {

        length += words[i].length
        
        if (length + space > maxWidth) {
            fn(ii, i, maxWidth - (length - words[i].length), space)

            length = 0
            space = 0
            ii = i
            i--
        } else {
            space++
        }
    }


    return string
};

console.log(fullJustify(["This", "is", "an", "example", "of", "text", "justification."], 16))
console.log(fullJustify(["What","must","be","acknowledgment","shall","be"], 16))
console.log(fullJustify(["Science","is","what","we","understand","well","enough","to","explain","to","a","computer.","Art","is","everything","else","we","do"], 20))