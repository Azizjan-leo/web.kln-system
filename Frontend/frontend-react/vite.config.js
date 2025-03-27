import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true,
    cors: true,
    origin: 'https://5642-94-143-197-243.ngrok-free.app' // Подставь свой
  },
  plugins: [react()],
});


// vite.config.js
// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';

// export default defineConfig({
//   server: {
//     host: true, // вместо '0.0.0.0' — работает лучше в Vite 5+
//     port: 5173,
//     origin: 'https://d529-91-205-48-119.ngrok-free.app', // 👈 Явный origin
//     strictPort: true,
//     cors: true,
//     https: false, // ты ведь не dev-сертификатом пользуешься
//   },
//   plugins: [react()],
// });
