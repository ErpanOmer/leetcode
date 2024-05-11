function mergeSort (array, left = 0, right = Infinity) {
    if (right === Infinity) {
        right = array.length - 1
    }

    if (left >= right) {
        return []
    }

    const middle = Math.floor((left + right) / 2)

    mergeSort(array, left, middle)
    mergeSort(array, middle + 1, right)

    const temp = []
    let i = left, j = middle + 1

    for (; i <= middle && j <= right;) {        
        temp.push(array[i] <= array[j] ? array[i++] : array[j++])
    }

    while(i <= middle) {
        temp.push(array[i++])
    }

    while(j <= right) {
        temp.push(array[j++])
    }

    for (const t of temp) {
        array[left++] = t
    }

    return array
}


console.log(mergeSort([-1,5,3,4,0, 7, 6]))