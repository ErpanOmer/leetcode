/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function(gas, cost) {
    let index = 0
    let liter = 0
    let totalGas = 0
    let totalCost = 0

    for (let i = 0; i < gas.length; i++) {
        totalGas += gas[i]
        totalCost += cost[i]
        liter += gas[i] - cost[i]

        if (liter < 0) {
            index = i + 1
            liter = 0
        }
    }

    if (totalGas < totalCost) {
        return -1
    }

    return index
};



console.log(canCompleteCircuit([1,2,3,4,5], [3,4,5,1,2]))
console.log(canCompleteCircuit([2,3,4], [3,4,3]))
console.log(canCompleteCircuit([5,1,2,3,4], [4,4,1,5,1]))