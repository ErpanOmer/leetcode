import { TreeNode } from './common.js'

var buildTree = function(inorder, postorder) {
    const r = postorder.pop()

    if (r === undefined) {
        return null
    }
    
    const root = new TreeNode(r)
    const index = inorder.findIndex(i => i === r)

    root.left = buildTree(inorder.slice(0, index), postorder.slice(0, index))
    root.right = buildTree(inorder.slice(index + 1), postorder.slice(index))

    return root
};


console.log(buildTree([9,3,15,20,7], [9,15,7,20,3]))

