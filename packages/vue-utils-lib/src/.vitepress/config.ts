import { defineConfig } from "vitepress";

export default defineConfig({
  title: "Vue Utils Lib",
  description: "A simple doc for a simple lib.",
  lang: "en-US",
  markdown: {
    theme: "dracula",
    lineNumbers: true,
  },
  themeConfig: {
    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2022-PRESENT Simone Colabufalo and contributors",
    },
    sidebar: [
      {
        text: "Introduction",
        items: [{ text: "Getting Started", link: "/" }],
      },
      {
        text: "Formatters",
        collapsed: false,
        items: [
          {
            text: "useNumberFormatter",
            link: "/formatters/useNumberFormatter/",
          },
        ],
      },
    ],
  },
});
