function mergeSort(array) {

    // 合并
    const merge = (a, b) => {
        const temp = []

        let i = 0
        let j = 0

        while (i < a.length && j < b.length) {
            temp.push(a[i] > b[j] ? b[j++] : a[i++])
        }

        while (i < a.length) {
            temp.push(a[i++])
        }

        while (j < b.length) {
            temp.push(b[j++])
        }

        return temp
    }

    // 分解
    const divide = (i, j) => {
        if (i > j) return []
        if (i === j) return [array[i]]

        const middle = Math.floor((i + j) / 2)

        return merge(divide(i, middle), divide(middle + 1, j))
    }

    return divide(0, array.length - 1)
}


console.log(mergeSort([]))