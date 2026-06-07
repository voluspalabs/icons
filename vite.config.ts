import { fileURLToPath } from 'node:url'
import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

const ICON_CHUNK_SIZE_WARNING_LIMIT = 800
const ICON_CHUNK_BUCKET_LENGTH = 5
const ICON_MODULE_PREFIX_PATTERN = /^pi-/
const ICON_CHUNK_SAFE_PATTERN = /[^a-z0-9]/g

export default defineConfig({
  root: 'site',
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: ICON_CHUNK_SIZE_WARNING_LIMIT,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (!id.includes('/src/pi-')) {
            return
          }

          const fileName = id.split('/').at(-1)
          const bucket =
            fileName
              ?.replace(ICON_MODULE_PREFIX_PATTERN, '')
              .slice(0, ICON_CHUNK_BUCKET_LENGTH)
              .replace(ICON_CHUNK_SAFE_PATTERN, 'x') ?? 'misc'

          return `icons-${bucket}`
        },
      },
    },
  },
  resolve: {
    alias: {
      '@voluspalabs/icons': fileURLToPath(
        new URL('./src/index.ts', import.meta.url),
      ),
    },
  },
})
