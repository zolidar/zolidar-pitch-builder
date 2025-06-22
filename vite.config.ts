import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  base: process.env.GITHUB_PAGES === 'true' ? '/zolidar-pitch-builder/' : '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Split vendor libraries into separate chunks
          'react-vendor': ['react', 'react-dom'],
          'ui-vendor': ['lucide-react'],
          // Split slides into smaller chunks
          'slides-1-20': [
            './src/slides/Slide01.tsx',
            './src/slides/Slide02.tsx',
            './src/slides/Slide03.tsx',
            './src/slides/Slide04.tsx',
            './src/slides/Slide05.tsx',
            './src/slides/Slide06.tsx',
            './src/slides/Slide07.tsx',
            './src/slides/Slide08.tsx',
            './src/slides/Slide09.tsx',
            './src/slides/Slide10.tsx',
            './src/slides/Slide11.tsx',
            './src/slides/Slide12.tsx',
            './src/slides/Slide13.tsx',
            './src/slides/Slide14.tsx',
            './src/slides/Slide15.tsx',
            './src/slides/Slide16.tsx',
            './src/slides/Slide17.tsx',
            './src/slides/Slide18.tsx',
            './src/slides/Slide19.tsx',
            './src/slides/Slide20.tsx'
          ],
          'slides-21-40': [
            './src/slides/Slide21.tsx',
            './src/slides/Slide22.tsx',
            './src/slides/Slide23.tsx',
            './src/slides/Slide24.tsx',
            './src/slides/Slide25.tsx',
            './src/slides/Slide26.tsx',
            './src/slides/Slide27.tsx',
            './src/slides/Slide28.tsx',
            './src/slides/Slide29.tsx',
            './src/slides/Slide30.tsx',
            './src/slides/Slide31.tsx',
            './src/slides/Slide32.tsx',
            './src/slides/Slide33.tsx',
            './src/slides/Slide34.tsx',
            './src/slides/Slide35.tsx',
            './src/slides/Slide36.tsx',
            './src/slides/Slide37.tsx',
            './src/slides/Slide38.tsx',
            './src/slides/Slide39.tsx',
            './src/slides/Slide40.tsx'
          ],
          'slides-41-60': [
            './src/slides/Slide41.tsx',
            './src/slides/Slide42.tsx',
            './src/slides/Slide43.tsx',
            './src/slides/Slide44.tsx',
            './src/slides/Slide45.tsx',
            './src/slides/Slide46.tsx',
            './src/slides/Slide47.tsx',
            './src/slides/Slide48.tsx',
            './src/slides/Slide49.tsx',
            './src/slides/Slide50.tsx',
            './src/slides/Slide51.tsx',
            './src/slides/Slide52.tsx',
            './src/slides/Slide53.tsx',
            './src/slides/Slide54.tsx',
            './src/slides/Slide55.tsx',
            './src/slides/Slide56.tsx',
            './src/slides/Slide57.tsx',
            './src/slides/Slide58.tsx',
            './src/slides/Slide59.tsx',
            './src/slides/Slide60.tsx'
          ]
        }
      }
    },
    chunkSizeWarningLimit: 600 // Increase warning limit to 600kb
  },
  assetsInclude: ['**/*.png', '**/*.webp', '**/*.jpg', '**/*.jpeg', '**/*.gif']
});
