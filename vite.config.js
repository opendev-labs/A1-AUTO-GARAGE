import { defineConfig } from 'vite'

export default defineConfig({
  base: './',  // Changed from '/A1-AUTO-GARAGE/'
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    emptyOutDir: true
  },
  server: {
    port: 3000
  }
})
