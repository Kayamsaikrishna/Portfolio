import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { viteStaticCopy } from 'vite-plugin-static-copy';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'src/assets/projects-documentation-pdf/*',
          dest: 'assets/projects-documentation-pdf'
        }
      ]
    })
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        assetFileNames: (assetInfo) => {
          if (assetInfo.name?.endsWith('.md')) {
            return 'assets/projects-documentation/[name].[ext]';
          }
          if (assetInfo.name?.endsWith('.pdf')) {
            return 'assets/projects-documentation-pdf/[name].[ext]';
          }
          return 'assets/[name].[ext]';
        },
      },
    },
  },
  assetsInclude: ['**/*.pdf'],
  publicDir: 'src/assets',
}));
