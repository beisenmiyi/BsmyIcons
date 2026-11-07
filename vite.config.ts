import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { viteSingleFile } from "vite-plugin-singlefile";

export default defineConfig(({ mode }) => {
  const isOffline = mode === "offline";
  const isProduction = mode === "production";

  return {
    base: isOffline ? "./" : isProduction ? "/BsmyIcons/" : "/",
    plugins: [react(), ...(isOffline ? [viteSingleFile()] : [])],
    server: {
      host: "0.0.0.0",
      port: 5173,
    },
    build: {
      outDir: isOffline ? "dist-offline" : "dist",
      emptyOutDir: true,
    },
  };
});
