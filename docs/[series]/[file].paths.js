import fs from 'fs'
import path from 'path'
import dirs from '../dirs'

export default {
    paths: () => {
        const paths = []

        for (const dir of dirs) {
            const files = fs.readdirSync(dir)

            for (const file of files) {
                const [index, name, ext] = file.split('.')
                
                paths.push({
                    params: {
                        file: index,
                        series: dir
                    },
                    content: fs.readFileSync(path.join(process.cwd(), dir, file), 'utf8')
                })
            }
        }

        return paths
    }
}