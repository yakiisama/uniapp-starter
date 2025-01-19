import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import createVitePlugins from './vite/plugins'

// https://vitejs.dev/config/
export default defineConfig(async () => {
  const UnoCSS = await import('unocss/vite').then(i => i.default)
  return {
    plugins: [
      ...createVitePlugins(),
      UnoCSS(),
    ],
    resolve: {
      alias: {
        '@': resolve(__dirname, 'src'),
      },
    },

    server: {
      proxy: {
        '/api': {
          target: 'http://localhost:9001',
          changeOrigin: true,
          rewrite: path => path.replace(/^\/api/, ''),
        },
      },
    },
  }
})
