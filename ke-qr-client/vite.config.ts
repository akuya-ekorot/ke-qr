import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    include: ["ke-qr-package"],
  },
  resolve: {
    alias: {
      "ke-qr-package": "/home/akuya/ke-qr/ke-qr-package/dist/ke_qr_code.js",
    },
  },
});
