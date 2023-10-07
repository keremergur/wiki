import { type } from 'os'
import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WIKI KE",
  description: "Documenting my learning journey.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/sass/': [
        {
            "text": "Sass / Scss",
            "items": [
                { "text": "Nesting", "link": "/sass/nesting" },
                { "text": "Variables", "link": "/sass/variables" }
            ]
        }
      ]
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
})
