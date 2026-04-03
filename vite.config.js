import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['favicon.svg', 'icon-192.png', 'icon-512.png'],
      manifest: {
        name: 'סופש — מה עושים בסוף השבוע?',
        short_name: 'סופש',
        description: 'הצעות מותאמות אישית לבילויים, טיולים, אירועים וחוויות — כל שבוע מחדש',
        theme_color: '#6366f1',
        background_color: '#f9fafb',
        display: 'standalone',
        dir: 'rtl',
        lang: 'he',
        start_url: '/',
        scope: '/',
        icons: [
          {
            src: 'icon-192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png'
          },
          {
            src: 'icon-512.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable'
          }
        ]
      }
    })
  ],
})
