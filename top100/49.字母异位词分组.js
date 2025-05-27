/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const map = new Map()

    for (const str of strs) {
        const s = str.split('').sort().join()
        const has = map.get(s)

        if (has) {
            has.push(str)
        } else {
            map.set(s, [str])
        }
    }


    return Array.from(map.values())
};


var groupAnagrams = function(strs) {
    const map = new Object();
    for (let s of strs) {
        const count = new Array(26).fill(0);

        for (let c of s) {
            count[c.charCodeAt() - 'a'.charCodeAt()]++;
        }

        map[count] ? map[count].push(s) : map[count] = [s];
    }
    
    return Object.values(map);
};



console.log(groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]))