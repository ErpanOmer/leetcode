/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function (s, t) {
    const need = new Map() // 记录t中每个字符的需求次数
    const window = new Map() // 记录当前窗口中每个字符的实际出现次数

    // 统计 t 中每个字符出现的次数
    for (const tt of t) {
        need.set(tt, (need.get(tt) || 0) + 1)
    }

    let left = 0 // 滑动窗口的左边界
    let right = 0 // 滑动窗口的右边界
    let valid = 0 // 记录当前窗口中，满足 `need` 中要求的字符数量
    let min = Number.MAX_SAFE_INTEGER // 记录最小子串的长度
    let start = 0 // 记录最小子串的起始位置

    while (right < s.length) {
        // 右边界扩展，进入新字符
        const c = s[right]
        right++

        // 如果当前字符是 t 中的字符
        if (need.has(c)) {
            // 将当前字符加入窗口
            window.set(c, (window.get(c) || 0) + 1)
            
            // 如果窗口中当前字符的数量达到了 t 中要求的数量
            if (window.get(c) === need.get(c)) {
                valid++ // valid 记录已经满足要求的字符种类数
            }
        }

        // 当 valid 等于 t 中字符种类数，表示窗口已经包含了所有 t 中的字符
        while (valid === need.size) {
            // 更新最小窗口
            if (right - left < min) {
                start = left
                min = right - left
            }

            // 缩小窗口，从左边收缩
            const d = s[left]
            left++

            // 如果收缩的字符是 t 中的字符，更新窗口中的数量
            if (need.has(d)) {
                if (window.get(d) === need.get(d)) {
                    valid-- // 如果该字符的数量减少到不满足要求，valid 减少
                }
                window.set(d, window.get(d) - 1) // 当前字符数量减少
            }
        }
    }

    // 如果找到了最小子串，返回它，否则返回空字符串
    return min === Number.MAX_SAFE_INTEGER ? '' : s.substring(start, start + min)
}



console.log(minWindow("cabwefgewcwaefgcf", 'cae'))