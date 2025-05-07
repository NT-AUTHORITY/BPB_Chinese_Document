import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "BPB Panel 非官方文档",
  description: "一个提供 GUI 界面的 Cloudflare Worker 代理服务器 - 非官方中文文档",
  lang: 'zh-CN',
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '首页', link: '/' },
      { text: '使用指南', link: '/configuration' },
      { text: '安装教程', link: '/worker-installation' },
      { text: '常见问题', link: '/faq' }
    ],

    sidebar: [
      {
        text: '入门',
        items: [
          { text: '首页', link: '/' },
          { text: '使用指南和配置', link: '/configuration' }
        ]
      },
      {
        text: '安装方法',
        items: [
          { text: 'Worker 安装', link: '/worker-installation' },
          { text: 'Pages 安装', link: '/pages-upload-installation' },
          { text: '向导安装', link: '/wizard-installation' }
        ]
      },
      {
        text: '其他',
        items: [
          { text: '常见问题', link: '/faq' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/bia-pain-bache/BPB-Worker-Panel' }
    ],

    footer: {
      message: '基于 Creative Commons 许可发布 | 非官方中文文档',
      copyright: 'BPB Panel 和其图标的版权为 © 2023-present BPB Worker Panel，本文档的版权为 © 2025 NT'
    }
  }
})
