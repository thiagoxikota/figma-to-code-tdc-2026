import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativa: o build em dist/ abre direto com file:// (camada 1, zero install)
export default defineConfig({
  plugins: [react()],
  base: './',
})
