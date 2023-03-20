import { resolve } from "path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import vueJsx from "@vitejs/plugin-vue-jsx";
import Unocss from "unocss/vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    Unocss(),
    dts({
      insertTypesEntry: true,
      skipDiagnostics: true,
      clearPureImport: true,
      cleanVueFileName: true,
    }),
  ],
  // root: resolve(__dirname, "./"),
  build: {
    cssCodeSplit: true,
    outDir: "dist",
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, "src/index.ts"),
      name: "Ui Starter",
      // the proper extensions will be added
      fileName: "ui-starter",
    },
    watch: {
      exclude: ["node_modules/**", "dist/**", "src/**/*.d.ts"],
      buildDelay: 1000,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: ["vue"],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
