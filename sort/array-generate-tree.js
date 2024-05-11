var data = [
  {
    parent_id: null,
    id: 'a',
    value: 'xxx'
  }, {
    parent_id: 'a',
    id: 'c',
    value: 'xxx'
  }, {
    parent_id: 'd',
    id: 'f',
    value: 'xxx'
  },
  {
    parent_id: 'c',
    id: 'e',
    value: 'xxx'
  },
  {
    parent_id: 'b',
    id: 'd',
    value: 'xxx'
  },
  {
    parent_id: 'a',
    id: 'b',
    value: 'xxx'
  }
]

const map = new Map()

for (const d of data) {
    let m = map.get(d.parent_id)

    if (!m) {
      map.set(d.parent_id, [d])
    } else {
      m.push(d)
    }
}

const fn = (parent_id = null, parent = {}) => {
  const nodes = map.get(parent_id) || []
  parent.children = nodes

  for (const node of nodes) {
    fn(node.id, node)
  }

  return parent
}


console.log(fn())