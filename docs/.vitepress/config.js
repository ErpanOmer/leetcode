import { defineConfig } from 'vitepress'
import fs from 'node:fs';
import path from 'node:path';
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
  // ... 其他配置
  async buildEnd(siteConfig) {
    // 1. 你的源码位置 (假设在项目根目录/functions)
    const srcDir = path.resolve(siteConfig.root, '../functions');
    
    // 2. 目标位置：VitePress 的 dist 目录内部
    // siteConfig.outDir 指向 docs/.vitepress/dist
    const destDir = path.resolve(siteConfig.outDir, 'functions');

    if (fs.existsSync(srcDir)) {
      // 确保目标父目录存在
      if (!fs.existsSync(siteConfig.outDir)) {
        fs.mkdirSync(siteConfig.outDir, { recursive: true });
      }
      
      // 复制文件夹
      fs.cpSync(srcDir, destDir, { recursive: true });
      console.log('✅ [VitePress] Functions copied to:', destDir);
    } else {
      console.error('❌ [VitePress] Source functions folder not found at:', srcDir);
    }
  }
})