import { defineConfig, DefaultTheme } from 'vitepress';

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "WIKI KE",
  description: "Documenting My Learning Journey.",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: 'Home', link: '/' },
      { text: 'Examples', link: '/markdown-examples' }
    ],

    sidebar: {
      '/': [
        {
          text: 'Examples',
          items: [
            { text: 'Markdown Examples', link: '/markdown-examples' },
            { text: 'Runtime API Examples', link: '/api-examples' },
          ]
        }
      ],
      '/sass/': [
        {
            "text": "Sass/Scss",
            "items": [
                { "text": "Nesting", "link": "/sass/nesting" }
            ]
        },
        {
            "text": "Troubleshoot",
            "items": [
                { "text": "Nesting", "link": "/sass/nesting" }
            ]
        }
      ],
    },
    
    socialLinks: [
      { icon: 'github', link: 'https://github.com/vuejs/vitepress' }
    ]
  }
});

// async function getSidebar(path: string): Promise<DefaultTheme.SidebarItem[]> {
//     const tso = await import(path + 'sbar.mjs') as DefaultTheme.SidebarItem[];
//     return tso;
// }
