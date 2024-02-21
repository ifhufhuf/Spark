import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Spark官网",
  description: "Spark官网",
  themeConfig: {
    siteTitle:"Spark官网",
    logo:"P_logo.png",
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/index.md' },
      { text: '文档', link: '/doc/index.md' },
      { text: '下载', link: '/D/下载Spark.md' },
      { 
        text: '帮助', items:[
          {text:'联系开发者',link: '/help/联系开发者.md'},
        ]
      },
    ],

    sidebar: {'/doc':[
      {text:'了解Spark',link:'/doc/了解Spark.md'},
      {text:'开始你的Spark之旅',link:'/doc/开始你的Spark之旅.md'}
    ]},

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
