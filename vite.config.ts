import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import path from "path";
import { visualizer } from "rollup-plugin-visualizer";

// https://vite.dev/config/
export default defineConfig({
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
          icons: ["react-icons"],
          redux: ["@reduxjs/toolkit"],
          framer: ["framer-motion"],
        },
      },
    },
  },
  plugins: [
    react(),
    tailwindcss(),
    visualizer({
      open: true, // automatically open report in browser
      gzipSize: true, // show gzip sizes
      brotliSize: true, // show brotli sizes
    }),
  ],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
