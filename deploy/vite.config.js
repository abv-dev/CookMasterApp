import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Séparer React et les vendors
          'vendor-react': ['react', 'react-dom', 'react-router-dom'],
          // Séparer les données volumineuses
          'data-meats': ['./src/data/meatData.js', './src/data/cutsData.js'],
          'data-recipes': ['./src/data/recipesData.js', './src/data/accompanimentRecipes.js'],
        }
      }
    },
    // Augmenter la limite d'avertissement
    chunkSizeWarningLimit: 600
  }
})
