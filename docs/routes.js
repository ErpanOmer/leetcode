import fs from 'fs'
import { capitalizeFirstLetter } from './tools'

export const excludeDirs = [
    'top100',
    'top150',
    'dynamic',
    'sort'
]


export const nav = excludeDirs.map(dir => ({
    text: capitalizeFirstLetter(dir),
    link: `/${dir}/`
}))


export const sidebar = (() => {
    const bar = {}

    for (const dir of excludeDirs) {
        let files = fs.readdirSync(dir)
        let sortedFiles = files.filter(file => file.match(/^\d+\./))

        if (sortedFiles.length) {
            files = sortedFiles.map(file => {
                const parts = file.split('.'); // 按 '.' 分割
                const index = parseInt(parts[0], 10); // 提取 index 并转为整数
                return { file, index };
              })
              .sort((a, b) => a.index - b.index) // 根据 index 排序
              .map(item => item.file); // 返回排序后的文件名
        }
    

        bar[`/${dir}/`] = [
            {
                text: capitalizeFirstLetter(dir),
                link: `/${dir}/`,
                items: [
                    {
                        text: '',
                        items: files.map(file => {
                            let [index, name, ext] = file.split('.')
                
                            return {
                                text: ext === 'js' ? `${index}.${name}` : index,
                                link: `/${dir}/${index}`
                            }
                        })
                    }
                ]
            }
        ]
    }

    return bar
})()