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
  head: [
    // 基础 favicon
    ['link', { rel: 'icon', href: 'https://erpanomer.nurverse.com/favicon.ico' }],
    // 2. Canonical
    ['link', { rel: 'canonical', href: 'https://erpanomer.nurverse.com/projects/leetcode/' }],
    
    // 3. SEO 关键词
    ['meta', { name: 'keywords', content: 'leetcode, algorithm, 算法, 题解' }],
    
    // 4. Open Graph (用于社交媒体分享预览)
    ['meta', { property: 'og:title', content: 'Leetcode 题解 | ErpanOmer' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:url', content: 'https://erpanomer.nurverse.com/projects/leetcode/' }],
    
    // 5. 移动端优化
    ['meta', { name: 'viewport', content: 'width=device-width, initial-scale=1' }]
  ],
  sitemap: {
    hostname: 'https://erpanomer.nurverse.com/projects/leetcode/'
  },
  router: {
    prefetchLinks: false
  },
  themeConfig: {
    prefetch: false,
    siteTitle: 'Leetcode',
    logo: 'https://erpanomer.nurverse.com/favicon-32x32.png',
    // 主题级选项
    nav: [
      ...nav,
      { text: '返回主站', link: 'https://erpanomer.nurverse.com/' },
    ],
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
  },
  shouldPreload: (file, type) => {
    return false;
  },
  vite: {
    build: {
      // 禁用资源预加载（Module Preload）
      modulePreload: {
        polyfill: false
      }, 
    }
  },
  vue: {
    template: {
      compilerOptions: {
        // 确保不会将 link 标签误认为自定义元素，并保持默认处理逻辑
        isCustomElement: (tag) => tag === 'link'
      }
    }
  }
})