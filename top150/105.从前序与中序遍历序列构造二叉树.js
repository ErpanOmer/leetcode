import { ArrayToTree, TreeNode } from './common.js'


var buildTree = function(preorder, inorder) {
    if (!preorder.length) {
        return null
    }

    const r = preorder[0]
    const root = new TreeNode(r)

    const index = inorder.findIndex(i => r === i)

    root.left = buildTree(preorder.slice(1, index + 1), inorder.slice(0, index))
    root.right = buildTree(preorder.slice(index + 1), inorder.slice(index + 1))

    return root
};


console.log(buildTree([3,9, 20,15,7], [9, 3,15,20,7]))