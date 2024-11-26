import { defineConfig } from 'vitepress'

export default defineConfig({
  // 站点级选项
  title: 'Leetcode',
  description: 'Just playing around.',
  base: '/leetcode/',
  cleanUrls: true,
  lastUpdated: true,

  themeConfig: {
    // 主题级选项
    nav: [
      { text: 'Top100', link: '/top100' },
      { text: 'Top150', link: '/top150' },
    ]
  }
})