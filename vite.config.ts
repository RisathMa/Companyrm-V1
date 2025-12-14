import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  publicDir: 'public',
  optimizeDeps: {
    include: ['firebase/app', 'firebase/auth', 'firebase/analytics']
  },
  server: {
    port: 3000,
  },
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
      }
    }
  }
});
