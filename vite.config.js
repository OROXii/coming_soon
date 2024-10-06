import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), { tailwindcss: {}, autoprefixer: {} }],
  // server: {
  //   port: 3002,
  //   strictPort: true,
  // },
});