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
            text: "Vue Lib Starter",
            link: "/packages/vue-lib-starter/",
          },
        ],
      },
      {
        text: "Apps",
        items: [{ text: "Vue SPA Starter", link: "/apps/vue-spa-starter/" }],
      },
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
          link: "/apps/",
          items: [
            { text: "Introduction", link: "/apps/" },
            { text: "Vue SPA Starter", link: "/apps/vue-spa-starter/" },
          ],
        },
      ],
      "/packages/": [
        {
          text: "Packages",
          link: "/packages/",
          items: [
            { text: "Introduction", link: "/packages/" },
            {
              text: "Vue Lib Starter",
              link: "/packages/vue-lib-starter/",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/packages/vue-lib-starter/",
                },
                {
                  text: "Changelog",
                  link: "/packages/vue-lib-starter/changelog",
                },
                {
                  text: "Formatters",
                  link: "/packages/vue-lib-starter/formatters/",
                  collapsed: true,
                  items: [
                    {
                      text: "useNumberFormatter",
                      link: "/packages/vue-lib-starter/formatters/useNumberFormatter/",
                    },
                    {
                      text: "useDurationBetweenDates",
                      link: "/packages/vue-lib-starter/formatters/useDurationBetweenDates/",
                    },
                  ],
                },
              ],
            },
            {
              text: "Vue Ui Starter",
              link: "/packages/ui-starter/",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/packages/ui-starter/",
                },
                { text: "Changelog", link: "/packages/ui-starter/changelog" },
              ],
            },
            {
              text: "Eslint and Prettier configs",
              link: "/packages/eslint-config-vue/",
              collapsed: true,
              items: [
                {
                  text: "Introduction",
                  link: "/packages/eslint-config-vue/",
                },
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
                {
                  text: "Introduction",
                  link: "/packages/unocss/",
                },
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
