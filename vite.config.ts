import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
const jsonServerPort = Number(process.env.VITE_VERCEL_ENV) || 3001;
export default defineConfig({
  plugins: [react()],

  base: "/IG-works/",

  server: {
    port: jsonServerPort,
    proxy: {
      "/api": {
        target: "https://restful-api-vercel-eta.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
      "/following": {
        target: "https://restful-api-vercel-eta.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/following/, ""),
      },
      "/notFound": {
        target: "https://restful-api-vercel-eta.vercel.app/",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/notFound/, ""),
      },
    },
  },
});
