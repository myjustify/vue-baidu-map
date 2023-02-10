import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: 'src/components/index.js',
      formats: ['es']
    },
    rollupOptions: {
      external: /^lit/,
    },
  },
  plugins: [vue()]
})
