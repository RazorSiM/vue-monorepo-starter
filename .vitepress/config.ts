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
    ":kind/:pkg/README.md": ":kind/:pkg/index.md",
    ":kind/:pkg/CHANGELOG.md": ":kind/:pkg/changelog.md",
    ":kind/:pkg/src/index.md": ":kind/:pkg/index.md",
    ":kind/:pkg/src/:type/index.md": ":kind/:pkg/:type/index.md",
    ":kind/:pkg/src/:type/:function/index.md":
      ":kind/:pkg/:type/:function/index.md",
  },
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: "Home", link: "/" },
      { text: "Get Started", link: "/guides/get-started" },
      {
        text: "Packages",
        items: [
          {
            text: "Introduction",
            link: "/packages/",
          },
          {
            text: "Vue Utils Lib",
            link: "/packages/vue-utils-lib/",
          },
        ],
      },
      { text: "Apps", items: [{ text: "Vue SPA", link: "/apps/vue-spa/" }] },
    ],

    sidebar: {
      "/guides/": [
        {
          text: "Get Started",
          items: [
            { text: "Introduction", link: "/guides/get-started" },
            { text: "Markdown Examples", link: "/guides/markdown-examples" },
            { text: "Runtime API Examples", link: "/guides/api-examples" },
            { text: "Packages", link: "/packages/" },
            { text: "Apps", link: "/apps/" },
          ],
        },
      ],
      "/apps/": [
        {
          text: "Apps",
          items: [
            { text: "Introduction", link: "/apps/" },
            { text: "Vue SPA", link: "/apps/vue-spa/" },
          ],
        },
      ],
      "/packages/": [
        {
          text: "Packages",
          items: [
            { text: "Introduction", link: "/packages/" },
            {
              text: "Vue Utils Libs",
              link: "/packages/vue-utils-lib/",
              collapsed: true,
              items: [
                {
                  text: "Changelog",
                  link: "/packages/vue-utils-lib/changelog",
                },
                {
                  text: "Formatters",
                  link: "/packages/vue-utils-lib/formatters/",
                  collapsed: true,
                  items: [
                    {
                      text: "useNumberFormatter",
                      link: "/packages/vue-utils-lib/formatters/useNumberFormatter/",
                    },
                  ],
                },
              ],
            },
            {
              text: "Vue UI Library",
              link: "/packages/ui/",
              collapsed: true,
              items: [{ text: "Changelog", link: "/packages/ui/changelog" }],
            },
            {
              text: "Eslint and Prettier configs",
              link: "/packages/eslint-config-vue/",
              collapsed: true,
              items: [
                {
                  text: "Changelog",
                  link: "/packages/eslint-config-vue/changelog",
                },
              ],
            },
            {
              text: "UnoCSS",
              link: "/packages/unocss/",
              collapsed: true,
              items: [
                { text: "Changelog", link: "/packages/unocss/changelog" },
              ],
            },
          ],
        },
      ],
    },
    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/RazorSiM/vue-monorepo-starter",
      },
    ],
  },
});
