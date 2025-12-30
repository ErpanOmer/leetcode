import { defineConfig } from 'vitepress'
import { nav, sidebar } from '../routes'

export default defineConfig({
  // 站点级选项
  title: 'Leetcode',
  description: 'Just playing around.',
  base: '/projects/leetcode/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  sitemap: {
    hostname: 'https://erpanomer.nurverse.com'
  },
  themeConfig: {
    siteTitle: 'Leetcode',
    // 主题级选项
    nav,
    sidebar,
    socialLinks: [
      { icon: 'github', link: 'https://github.com/ErpanOmer' },
    ],
    footer: {
      message: '❤ With Algorithm',
      copyright: `Copyright © ${new Date().getFullYear()}-present Erpan Omer`
    },
  },
  async buildEnd(siteConfig) {
    // 1. 定义源路径（假设你的 functions 源码在项目根目录或 docs 下）
    // 如果在 docs/public/functions
    const srcDir = path.resolve(siteConfig.root, 'public/functions');
    // 2. 定义目标路径 (dist 目录)
    const destDir = path.resolve(siteConfig.outDir, '../functions'); 
    // 注意：Cloudflare Pages 扫描的是【输出目录】的同级或子级
    // 建议直接放在 outDir 里面：siteConfig.outDir + '/functions'

    const finalDest = path.resolve(siteConfig.outDir, 'functions');

    if (fs.existsSync(srcDir)) {
      console.log(`🚀 Moving functions from ${srcDir} to ${finalDest}`);
      // 递归复制文件夹
      fs.cpSync(srcDir, finalDest, { recursive: true });
      console.log('✅ Functions deployed to dist successfully!');
    } else {
      console.warn('⚠️ No functions folder found in public/');
    }
  }
})