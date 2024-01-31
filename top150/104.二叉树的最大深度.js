function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
}


function ArrayToTree (array = []) {
    const height = Math.floor(Math.log2(array.length + 1))

    let tree = new TreeNode(array[0])

    const fn = (node, i, h) => {
        console.log(i, node.val, h)

        if (h === height) {
            return
        }

        node.left = new TreeNode(array[i * 2 + 1])
        node.right = new TreeNode(array[i * 2 + 2])
        
        fn(node.left, i * 2 + 1, h + 1)
        fn(node.right, i * 2 + 2, h + 1)
    }

    fn(tree, 0, 1)


    return tree
}

function TreeToArray(root) {
    const queue = [root]
    const array = []

    while(queue.length) {
        const node = queue.shift()
        array.push(node.val)

        node.left && queue.push(node.left)
        node.right && queue.push(node.right)
    }

    return array
}


console.log(TreeToArray(ArrayToTree([3,9,20,5,2,15,7,8, 25, 66, 55, 66, 77, 88, 99])))