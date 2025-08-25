import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "LyrebirdEmby",
  description: "A WiKi Page for LyrebirdEmby",
  themeConfig: {
    logo: '/images/lyrebird-logo-small.webp',
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '使用文档', link: '/introduce' }
    ],

    sidebar: [
      {
        text: 'WIKI文档',
        items: [
          { text: '介绍', link: '/introduce' },
          { text: '使用须知', link: '/rules' },
          { text: '求片指南', link: '/download' },
          // 👇 在这里为您添加了新的页面链接
          { text: '种子命名规则', link: '/seed-naming-rules' }, 
          { text: '合作机场', link: '/airport' },
          { text: '线路使用', link: '/line' },
          { text: '疑难杂症', link: '/faq' },
          { text: '关于我们', link: '/about' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'telegram', link: 'https://t.me/lyrebirdchat' }
    ],

    footer: {
      message: 'Released under the MIT License.',
      copyright: 'Copyright © LyrebirdEmby 2025'
    },
    lastUpdated: {
      text: '最后更新时间',
      formatOptions: {
        dateStyle: 'full',
        timeStyle: 'short'
      }
    }
  }
})
