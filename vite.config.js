import { defineConfig } from 'vite' // ⬅️ deze regel is essentieel
import react from '@vitejs/plugin-react'
import path from 'path'


export default defineConfig({
  base: '/Rosetta-Development/', // <-- dit is jouw repo-naam
  plugins: [react()],
  server: {
    allowedHosts: true,
  },
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
    extensions: ['.mjs', '.js', '.jsx', '.ts', '.tsx', '.json'],
  },
  optimizeDeps: {
    esbuildOptions: {
      loader: {
        '.js': 'jsx',
      },
    },
  },
})