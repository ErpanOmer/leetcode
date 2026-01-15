import fs from 'fs'
import path from 'path'

const dirs = ['top100', 'top150', 'leetcode', 'dynamic', 'sort']

const allProblems = []

for (const dir of dirs) {
    const files = fs.readdirSync(dir)
    const jsFiles = files.filter(file => file.endsWith('.js') && file.match(/^\d+\./))
    
    for (const file of jsFiles) {
        const parts = file.split('.')
        const index = parseInt(parts[0], 10)
        const name = parts[1]
        
        allProblems.push({
            index,
            name,
            fullName: `${index}.${name}`,
            dir,
            file,
            path: `./${dir}/${file}`
        })
    }
}

allProblems.sort((a, b) => a.index - b.index)

console.log(`Total problems: ${allProblems.length}`)
console.log('\n=== Problems by Directory ===\n')

for (const dir of dirs) {
    const problems = allProblems.filter(p => p.dir === dir)
    console.log(`${dir}: ${problems.length} problems`)
}

console.log('\n=== All Problems ===\n')
allProblems.forEach(p => {
    console.log(`${p.fullName} [${p.dir}]`)
})

fs.writeFileSync('problems.json', JSON.stringify(allProblems, null, 2))
console.log('\n✅ Saved to problems.json')