import { resolve } from 'node:path'
import { defineConfig, searchForWorkspaceRoot } from 'vite'
import vue from '@vitejs/plugin-vue'
import dts from 'vite-plugin-dts'

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: [searchForWorkspaceRoot(process.cwd())],
    },
  },
  plugins: [
    vue(),
    dts({
      insertTypesEntry: true,
      skipDiagnostics: true,
      clearPureImport: true,
      cleanVueFileName: true,
    }),
  ],
  build: {
    lib: {
      // Could also be a dictionary or array of multiple entry points
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'Vue Lib Starter',
      // the proper extensions will be added
      fileName: 'vue-lib-starter',
    },
    watch: {
      exclude: ['node_modules/**', 'dist/**', 'src/**/*.d.ts'],
      buildDelay: 1000,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        'vue',
        '@vueuse/core',
        '@vueuse/head',
        '@vueuse/shared',
        'dayjs',
        'dayjs/plugin/relativeTime',
        'dayjs/plugin/utc',
        'dayjs/plugin/timezone',
        'dayjs/plugin/duration',
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          'vue': 'Vue',
          '@vueuse/core': 'VueUse',
          '@vueuse/head': 'VueUseHead',
          '@vueuse/shared': 'VueUseShared',
          'dayjs': 'dayjs',
          'dayjs/plugin/duration': 'dayjsDuration',
          'dayjs/plugin/utc': 'dayjsUTC',
        },
      },
    },
  },
})
