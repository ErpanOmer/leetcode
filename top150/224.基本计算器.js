/**
 * @param {string} s
 * @return {number}
 */
var calculate = function(string) {
    const stack = ['0']
    const calc = []
    string = string.replace(/ /g, '')
    string = string.replace('(-', '(0-')
    string = string.replace('(+', '(0+')

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


    let sign = 1

    for (let i = 0; i < string.length; i++) {
        const s = string[i]

        if (s === '(') {
            calc.push(s)
            sign = 1
            continue
        }

        if (s === ')') {
            while(calc[calc.length - 1] !== '(') {
                stack.push(calc.pop())
            }

            calc.pop()

            continue
        }

        if (s === '+' || s === '-') {

            calc.push('+')

            sign = s === '+' ? 1 : -1
        }  else {
            let str = ''

            while(!Number.isNaN(Number(string[i]))) {
                str += string[i++]
            }

            stack.push(Number(str) * sign)

            if (str) {
                i--
            }
        }
        
        // console.log(calc, stack)
    }

    // console.log(calc, stack)

    while(calc.length) {
        stack.push(calc.pop())
    }

    
    return evalRPN(stack)
};

console.log(calculate("- (3 + (4 + 5))"))
console.log(calculate("(1+(4+5+2)-3)+(6+8)"))
console.log(calculate("2-(5-6)"))
console.log(calculate("1 + 1 - 9 + 7 - 3"))
console.log(calculate(" 2-1 + 2 "))
console.log(calculate("2147483647"))
console.log(calculate("1-(     -2)"))
console.log(calculate("-2+ 1"))