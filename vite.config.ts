import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "tailwindcss";
import { VitePWA } from "vite-plugin-pwa";

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest: {
        name: "Moot's",
        short_name: "Moot's",
        description:
          "Application for monitoring and reflecting on emotional states.",
        theme_color: "#4F46E5",
        background_color: "#ffffff",
        display: "standalone",
        start_url: "/",
        orientation: "portrait",
        scope: "/",
        icons: [
          {
            src: "pwa-512x512.png",
            sizes: "512x512",
            type: "/img/logo.png",
          },
        ],
        categories: ["health", "productivity", "mental-health"],
        lang: "en-EN",
        shortcuts: [
          {
            name: "Registrar estado de ánimo",
            short_name: "Registrar",
            description: "Accede rápido para añadir tu estado de ánimo diario",
            url: "/dashboard",
          },
          {
            name: "Ver estadísticas",
            short_name: "Estadísticas",
            description: "Consulta tus estadísticas emocionales",
            url: "/dashboard",
          },
        ],
      },
    }),
  ],
  css: {
    postcss: {
      plugins: [tailwindcss()],
    },
  },
});
