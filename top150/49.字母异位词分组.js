/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for (const str of strs) {
        const string = new Array(26).fill(0)

        for (const s of str) {
            string[s.charCodeAt() - 97]++
        }

        let key = ''
        for (let i = 0; i < string.length; i++) {
            if (string[i] !== 0) {
                key += string[i] * (i + 1)
            }
        }

        if (!map.has(key)) {
            map.set(key, [])
        }

        map.get(key).push(str)
    }

    return Array.from(map.values())
};


console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))
console.log(groupAnagrams([""]))
console.log(groupAnagrams(["a"]))
console.log(groupAnagrams(["abbbbbbbbbbb","aaaaaaaaaaab"]))
console.log(groupAnagrams(["aaaaaaaaaaabcdefghijklmnopqrstuvwxyz","abbbbbbbbbbbcdefghijklmnopqurstuvwxyz","abcccccccccccdefghijklmnopqurstuvwxyz"]))
console.log(groupAnagrams(["ac","c"]))