/**
 * @param {string} path
 * @return {string}
 */
var simplifyPath = function(path) {
    const string = path.split('/').filter(Boolean)
    let stack = []

    for (const iterator of string) {
        if (iterator === '..') {
            stack.pop()
        } else if (iterator !== '.') {
            stack.push('/' + iterator)
        }
    }

    return '/' + stack.join('/')
};



console.log(simplifyPath("/a/./b/../../c/"))
console.log(simplifyPath('/home//foo/'))
console.log(simplifyPath('/../'))
console.log(simplifyPath('/home/'))