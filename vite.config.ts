import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import path from 'node:path';

export default defineConfig({
  plugins: [react()],
   base: '/',
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
      '@components': path.resolve(__dirname, 'src/components'),
      '@pages': path.resolve(__dirname, 'src/pages'),
      '@data': path.resolve(__dirname, 'src/data'),
      '@styles': path.resolve(__dirname, 'src/styles'),
      '@assets': path.resolve(__dirname, 'src/assets'),
      '@hooks': path.resolve(__dirname, 'src/hooks'),
      '@utils': path.resolve(__dirname, 'src/utils'),
      '@routes': path.resolve(__dirname, 'src/routes'),
      '@tests': path.resolve(__dirname, 'src/tests'),
      '@mocks': path.resolve(__dirname, 'src/mocks'),
      '@types': path.resolve(__dirname, 'src/types'),
      '@constants': path.resolve(__dirname, 'src/constants'),
      '@context': path.resolve(__dirname, 'src/constext'),
          },
  },
  server: {
    port: 5173,
    open: true,
    proxy: {
      '/api': {
        target: 'http://localhost:3000',
        changeOrigin: true,
        secure: false
      }
    }
  }
});