import dirs from "../dirs"
import fs from 'fs'

export default {
    paths () {
        return dirs.map(dir => ({
            params: {
                series: dir,
                files: fs.readdirSync(dir)
            }
        }))
    }
}