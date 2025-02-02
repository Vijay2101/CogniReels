import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    host: '0.0.0.0', // Ensure Vite listens on all network interfaces
    port: 3000,      // Keep it the same as your local setup
    strictPort: true,
    allowedHosts: ['.ngrok-free.app'], // Allow all ngrok subdomains
  },
})
