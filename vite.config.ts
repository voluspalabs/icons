import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

export default defineConfig({
  root: 'site',
  plugins: [react()],
  resolve: {
    alias: {
      '@voluspalabs/icons': fileURLToPath(
        new URL('./src/index.ts', import.meta.url),
      ),
    },
  },
})
