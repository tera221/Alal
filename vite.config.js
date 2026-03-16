import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
   plugins: [react()],
  server: {
    host: '0.0.0.0',  //  permet d'accepter toutes les connexions réseau
    port: 5174,       // ou le port que tu veux utiliser
    strictPort: true, // empêche vite de changer de port automatiquement
  },
})
