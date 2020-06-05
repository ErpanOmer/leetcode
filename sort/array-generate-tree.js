var data = [
  {
    parent_id: null,
    id: 'a',
    value: 'xxx'
  }, {
    parent_id: 'a',
    id: 'c',
    value: 'xxx'
  }, {
    parent_id: 'd',
    id: 'f',
    value: 'xxx'
  }, 
  {
    parent_id: 'c',
    id: 'e',
    value: 'xxx'
  },
  {
    parent_id: 'b',
    id: 'd',
    value: 'xxx'
  },
  {
    parent_id: 'a',
    id: 'b',
    value: 'xxx'
  }
]

let tree = {}

const fn = node => {
  //  查找子节点数组
  const filter = parent => {
    let length = data.length
    const children = []

    while (length--) {
      if (data[length].parent_id === parent.id) {
        children.push(data.splice(length, 1)[0])
      }
    }

    return children.length > 0 ? children : null
  }

  //  如果树是空的，那么找出根节点，并创建根节点
  if (JSON.stringify(node) === '{}') {
    const index = data.findIndex(i => !!!i.parent_id)
    tree = data.splice(index, 1)[0]
    return fn(tree)
  }

  //  如果是根节点，查找它的子节点，并挂载子节点
  if (!Array.isArray(node)) {
    const children = filter(node)
    if (children) {
      tree.children = children
      return fn(children)
    }
  }

  // 其它任何情况，遍历子节点 并递归挂载
  node.forEach(item => {
    const children = filter(item)
    if (children) {
      item.children = children
      fn(children)
    }
  })

  return tree
}

console.log(fn(tree))
