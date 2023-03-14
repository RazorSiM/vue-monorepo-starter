import { defineConfig } from "vitepress";

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Monorepo Docs",
  description: "Official Monorepo Documentation",
  lang: "en-US",
  markdown: {
    theme: "dracula",
    lineNumbers: true,
  },
  rewrites: {
    ":pkg/src/index.md": ":pkg/index.md",
    ":pkg/src/:type/index.md": ":pkg/:type/index.md",
    ":pkg/src/:type/:function/index.md": ":pkg/:type/:function/index.md",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/get-started" },
    ],

    sidebar: [
      {
        text: "Get Started",
        items: [{ text: "Introduction", link: "/get-started" }],
      },
      {
        text: "Vue Utils Library",
        items: [
          { text: "Introduction", link: "/vue-utils-lib/" },
          {
            text: "Formatters",
            items: [
              {
                text: "useNumberFormatter",
                link: "/vue-utils-lib/formatters/useNumberFormatter/",
              },
            ],
          },
        ],
      },
      {
        text: "Examples",
        items: [
          { text: "Markdown Examples", link: "/markdown-examples" },
          { text: "Runtime API Examples", link: "/api-examples" },
        ],
      },
    ],

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RazorSiM/vue-monorepo-starter",
      },
    ],
  },
});
