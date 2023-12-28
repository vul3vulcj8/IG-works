import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

const jsonServerPort = Number(process.env.JSON_SERVER_PORT) || 3004;

export default defineConfig({
  plugins: [react()],
  base: "/IG-works/",
  server: {
    port: jsonServerPort,
    proxy: {
      "/home": {
        target: `http://localhost:${jsonServerPort}/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/home/, ""),
      },
      "/following": {
        target: `http://localhost:${jsonServerPort}/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/following/, "/following/IG-works"),
      },
      "/notFound": {
        target: `http://localhost:${jsonServerPort}/`,
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/notFound/, "/notFound/IG-works"),
      },
    },
  },
});
