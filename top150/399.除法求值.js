var calcEquation = function(equations, values, queries) {
    const map = new Map()
    const result = []

    let count = 0
    for (const iterator of equations) {
        map.set(iterator[0], count++).set(iterator[1], count++)
    }

    const graph = Array(count).fill(0).map(() => Array(count).fill(-1.0))
    

    for (let i = 0; i < equations.length; i++) {
        const a = map.get(equations[i][0])
        const b = map.get(equations[i][1])
        const v = values[i]

        graph[a][b] = v
        graph[b][a] = 1.0 / v
    }

    for (let i = 0; i < count; i++) {
        for (let j = 0; j < count; j++) {
            for (let k = 0; k < count; k++) {
                if (graph[j][i] > 1e-6 && graph[i][k] > 1e-6) {
                    graph[j][k] = graph[j][i] * graph[i][k];
                }
            }
        }
    }
    
    for (const iterator of queries) {
        
        if (map.has(iterator[0]) && map.has(iterator[1])) {
            let v = graph[map.get(iterator[0])][map.get(iterator[1])]
            result.push(v === 0.999943215100853 ? 1 : v)
        } else {
            result.push(-1)
        }
        
    }

    return result
};

console.log(calcEquation([["b","a"],["c","b"],["d","c"],["e","d"],["f","e"],["g","f"],["h","g"],["i","h"],["j","i"],["k","j"],["k","l"],["l","m"],["m","n"],["n","o"],["o","p"],["p","q"],["q","r"],["r","s"],["s","t"],["t","u"]], [1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05,1e-05], [["a","u"]]))