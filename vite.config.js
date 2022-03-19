import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { ViteAliases } from 'vite-aliases'

// https://vitejs.dev/config/
export default defineConfig({
  base: 'https://github.com/LanzerDev/rps-react.git',
  plugins: [react(), ViteAliases([
    {
      find: '@assets',
      replacement: './src/assets',
    },
    {
      find: '@components',
      replacement: './src/components'
    },
    {
      find: '@context',
      replacement: './src/context'
    }
])],
  server: {
    watch: {
      usePolling: true
    }
  }

})
