import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import obfuscator from "rollup-plugin-obfuscator";
// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    // obfuscator({
    //   global: true,
    //   options: {
    //     splitStrings: true,
    //   },
    // }),
  ],
  server: {
    host: true,
    port: 3000
  },
  // base: "./",
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          library: [
            "react",
            "react-dom",
            "react-router-dom",
            // "crypto-js",
            "swiper",
            "redux",
            "i18next",
            "react-redux",
          ],
        },
        dir: "dist",
        assetFileNames: (assetInfo) => {
          let extType = assetInfo.name.split(".")[1];
          if (/png|jpe?g|svg|gif|tiff|bmp|ico/i.test(extType)) {
            extType = "images";
            return `assets/${extType}/[name][extname]`;
          }
          if (/mp4|mov|webm|mpeg/i.test(extType)) {
            extType = "videos";
            return `assets/${extType}/[name][extname]`;
          }
          if (/ttf|otf/i.test(extType)) {
            extType = "fonts";
            return `assets/${extType}/[name][extname]`;
          }
          return `assets/${extType}/[name]-[hash][extname]`;
        },
      },
    },
  },
});
