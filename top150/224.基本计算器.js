/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(string) {
    var evalRPN = function(tokens) {
        const stack = []
        const comp = new Set(['+', '-', '*', '/'])
    
        for (const t of tokens) {
            if (!comp.has(t)) {
                stack.push(Number(t))
            } else {
                const b = stack.pop()
                const a = stack.pop()
    
                switch (t) {
                    case '+':
                        stack.push(a + b);
                        break;
                    case '-':
                        stack.push(a - b);
                        break;
                    case '*':
                        stack.push(a * b);
                        break;
                    case '/':
                        stack.push(a / b | 0);
                        break;
                }
            }
        }
    
        return stack.pop()
    }

    string = string.replace(/ /g, '')

    if (string[0] === '-') {
        string = '0' + string
    }

    string = string.replace('-(', '+0-(')
    string = string.replace('(-', '(0-')

    const s1 = []
    const s2 = []

    for (let i = 0; i < string.length; i++) {
        const s = string[i]

        if (!isNaN(Number(s))) {
            let str = ''

            while(!Number.isNaN(Number(string[i]))) {
                str += string[i++]
            }

            s1.push(str)

            if (str) {
                i--
            }
        }

        if (s === '(') {
            s2.push(s)
        }

        if (s === ')') {
            let p = s2.pop()

            while(p !== '(') {
                s1.push(p)
                p = s2.pop()
            }
        }

        if (s === '+' || s === '-') {
            if (!s2.length) {
                s2.push(s)
            } else {
                if (s2[s2.length - 1] !== '(') {
                    s1.push(s2.pop())
                    s2.push(s)
                } else {
                    s2.push(s)
                }
            }
        }
        
    }


    while(s2.length) {
        s1.push(s2.pop())
    }
    
    return evalRPN(s1)
};


// 中序表达式 -> 逆波兰表达式 再进行计算
// 时间复杂度：O(n)
// 空间复杂度：O(n)

console.log(calculate("- (3 + (4 + 5))"))
console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate("2-(5-6)"))
console.log(calculate("1 + 1 - 9 + 7 - 3"))
console.log(calculate(" 2-1 + 2 "))
console.log(calculate("2147483647"))
console.log(calculate("1-(     -2)"))
console.log(calculate("-2+ 1"))