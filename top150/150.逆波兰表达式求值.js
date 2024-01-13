/**
 * @param {string[]} tokens
 * @return {number}
 */
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

// 时间复杂度：O(n)
// 空间复杂度：O(n)

console.log(evalRPN(["2","1","+","3","*"]))
console.log(evalRPN(["4","13","5","/","+"]))
console.log(evalRPN(["10","6","9","3","+","-11","*","/","*","17","+","5","+"]))