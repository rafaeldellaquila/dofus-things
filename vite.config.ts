import react from '@vitejs/plugin-react-swc'
import { resolve } from 'path'
import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: [
      { find: '@', replacement: resolve(__dirname, './src') },
      { find: '@assets', replacement: resolve(__dirname, './src/assets') },
      {
        find: '@components',
        replacement: resolve(__dirname, './src/components')
      },
      { find: '@firebase', replacement: resolve(__dirname, './src/firebase') },
      { find: '@i18n', replacement: resolve(__dirname, './src/i18n') },
      { find: '@theme', replacement: resolve(__dirname, './src/theme') }
    ]
  }
})
