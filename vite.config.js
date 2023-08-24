import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import legacy from '@vitejs/plugin-legacy'
import vueJsx from '@vitejs/plugin-vue-jsx'

import { join } from 'path'
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vueJsx({
      // options are passed on to @vue/babel-plugin-jsx
    }),
    legacy({
      targets: ['defaults', 'not IE 11'],
    }),
  ],
  // 软链接
  resolve: {
    alias: {
      '@': join(__dirname, '/src'),
    },
  },
})
