import fs from 'fs'
import { excludeDirs } from '../routes'

export default {
    paths () {
        return excludeDirs.map(dir => ({
            params: {
                series: dir,
                files: fs.readdirSync(dir)
            }
        }))
    }
}