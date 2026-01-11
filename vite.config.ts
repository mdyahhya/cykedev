import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  
  // Optimize for production
  build: {
    outDir: 'dist',
    sourcemap: false,
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          'three-vendor': ['three', '@react-three/fiber', '@react-three/drei'],
          'react-vendor': ['react', 'react-dom'],
          'motion-vendor': ['framer-motion']
        }
      }
    }
  },
  
  // Server config for development
  server: {
    port: 3000,
    open: true,
    host: true
  },
  
  // Handle asset loading
  assetsInclude: ['**/*.glb', '**/*.gltf'],
  
  // Base URL - leave as '/' for Vercel
  base: '/'
})
