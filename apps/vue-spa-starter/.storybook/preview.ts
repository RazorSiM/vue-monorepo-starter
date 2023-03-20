import "@unocss/reset/tailwind.css";
import "uno.css";
import "@vue-monorepo/ui-starter/index.css";

export const parameters = {
  backgrounds: {
    default: "light",
  },
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
