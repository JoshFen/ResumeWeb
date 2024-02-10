import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Resume-Site/', // Added to try and get github pages working, can remove if not.
  build: {
    outDir: 'build', // specify the output directory
  } // Added to try and get github pages working, can remove if not.
})
