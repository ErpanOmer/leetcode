import { defineConfig } from 'vitepress'
import { nav, sidebar } from '../routes'

export default defineConfig({
  // 站点级选项
  title: 'Leetcode',
  description: 'Just playing around.',
  // base: '/leetcode/',
  cleanUrls: true,
  lastUpdated: true,
  appearance: 'force-dark',
  sitemap: {
    hostname: 'https://leetcode.nurverse.com'
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
  }
})